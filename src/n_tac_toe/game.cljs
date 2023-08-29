(ns n-tac-toe.game
  (:require [cljs.pprint :as pprint]))

(defprotocol TicTacToe
  "The meta tic-tac-toe game. There are two types of boards:
   A regular nxn tic-tac-toe board (vec of vec of chars)
   A nxn board of regular tic-tac-toe boards (where each space is a Board)
   A nxn board is won by winning each game for a space for either X or O, e.g.
   X wins all spaces in a row, or diagonally, etc."
  (move [this c y x])
  (win? [this]))

(defrecord Board
           [rows])

(defrecord MetaBoard
           [rows])

(extend-type Board
  TicTacToe
  (move [{:keys [rows]} c y x]
    (->Board (assoc-in rows [y x] c)))
  (win? [{:keys [rows]}]
    (letfn [(same-or-nil
              [a b]
              (when (= a b)
                b))
            (collect-diag
              [i row]
              (first (drop i row)))
            (collect-col
              [i]
              (map #(get % i) rows))]
      (or
      ;; diagonally fwd
       (->> rows
            (map-indexed collect-diag)
            (reduce same-or-nil))
      ;; diagonally rev
       (->> rows
            reverse
            (map-indexed collect-diag)
            (reduce same-or-nil))
      ;; win by row
       (->> rows
            (map #(reduce same-or-nil %))
            (filter identity)
            first)
      ;; win by column
       (->> (range (count rows))
            (map #(reduce same-or-nil (collect-col %)))
            (filter identity)
            first)))))

(extend-type MetaBoard
  TicTacToe
  (move [{:keys [rows]} ^Board board y x]
    (->MetaBoard (assoc-in rows [y x] board)))
  (win? [{:keys [rows]}]
    (win? (->Board (map (partial map win?) rows)))))

(comment
  (require '[clojure.pprint :as pprint])

  ;; win states
  (let [{:keys [diag-bwd diag-fwd] :as states} {:diag-fwd (->Board [[\x \o \o]
                                                                    [\o \x \o]
                                                                    [\o \o \x]])
                                                :diag-bwd (->Board [[\x \o \o]
                                                                    [\o \o \x]
                                                                    [\o \o \x]])
                                                :row (->Board [[\o \o \o]
                                                               [\o \x \x]
                                                               [\x \o \x]])
                                                :col (->Board [[\x \x \o]
                                                               [\o \x \x]
                                                               [\x \x \o]])}
        states (assoc
                states
                  ;; diag-fwd was won by x
                :meta-win (->MetaBoard [[diag-fwd diag-bwd diag-bwd]
                                        [diag-bwd diag-fwd diag-bwd]
                                        [diag-bwd diag-bwd diag-fwd]]))]
    (reduce-kv (fn [m k v]
                 (assoc m k (win? v)))
               {}
               states))

  ;; move
  (let [almost (->Board [[\x \o \o]
                         [\o \x \o]
                         [\o \o nil]])]
    {:almost-win (win? almost)
     :won (win? 
           (move almost \x 2 2))}))