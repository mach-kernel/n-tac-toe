(ns n-tac-toe.components.board
  (:require [clojure.walk :as walk]
            [re-frame.core :as re-frame]
            [n-tac-toe.game :as game :refer [TicTacToe]]
            [n-tac-toe.events :as events]))

(defn- make-buttons-and-coords
  "Makes buttons to play game, annotates coord metadata
   to child boards and hiccup fragments"
  [^TicTacToe {:keys [rows] :as board}]
  (let [n (count rows)
        coords (for [y1 (range n)
                     x1 (range n)]
                 [y1 x1])
        {:keys [coord]} (meta board)
        [yb xb] coord]
    (->> rows
         (mapcat identity)
         (interleave coords)
         (partition-all 2)
         (mapv #(let [[[y x] cell] %
                      coord-meta {:coord [y x]}
                      cell (if (satisfies? TicTacToe cell)
                             (make-buttons-and-coords (with-meta cell coord-meta))
                             [:td [:button
                                   {:on-click (fn []
                                                (re-frame/dispatch [::events/play \x yb xb y x]))}
                                   (or cell "empty")]])]
                  (with-meta cell coord-meta)))
         (partition-all n)
         (mapv vec))))

(comment
  (let [{:keys [rows] :as new-game} (game/new-game 3)]
    (make-buttons-and-coords new-game)))

(defn board
  [^TicTacToe board]
  (letfn [(tableify
            [cells]
            (if (and (sequential? cells)
                        ;; board -> row -> cells (which are hiccup tds)
                     (= :td (get-in cells [0 0 0])))
                 ;; cells of buttons with values into cells
                 ;; with entire tables
              [:td (->> cells
                        (map #(cons :tr %))
                        (cons :table))]
              cells))
          (delazy
            [maybe-seq]
            (if (sequential? maybe-seq)
              (into [] maybe-seq)
              maybe-seq))]
        ;; cells of tables into a table with rows of table cells
    (->> (make-buttons-and-coords board)
         (walk/prewalk tableify)
         (map #(cons :tr %))
         (cons :table)
         (walk/prewalk delazy))))
