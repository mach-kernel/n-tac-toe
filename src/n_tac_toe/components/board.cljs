(ns n-tac-toe.components.board
  (:require [clojure.walk :as walk]))

(defn board
  [^TicTacToe {:keys [rows]}] 
  (letfn [(buttonify
            [cell]
            (if (or (char? cell)
                    (nil? cell))
              [:td [:button (or cell "empty")]]
              cell))
          (tableify
            [cells]
            (if (and (sequential? cells)
                    ;; board -> row -> cells
                    ;; which are hiccup tds after buttonify
                     (= :td (get-in cells [0 0 0])))
             ;; cells of buttons with values into cells
             ;; with entire tables
              [:td (->> cells
                        (map #(cons :tr %))
                        (cons :table))]
              cells))]
    ;; cells of tables into a table with rows of table cells
    (let [table (cons :table (->> rows
                                  (walk/postwalk buttonify)
                                  (walk/prewalk tableify)
                                  (map #(cons :tr %))))]
      (walk/prewalk #(if (sequential? %)
                       (into [] %)
                       %)
                    table))))
