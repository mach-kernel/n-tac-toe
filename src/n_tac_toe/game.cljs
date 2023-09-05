(ns n-tac-toe.game
  (:require
   [clojure.walk :as walk]
   [clojure.core.match :as match]
   [cljs.pprint :as pprint]))

;; game

(defprotocol TicTacToe
  "The meta tic-tac-toe game. There are two types of boards:
   A regular nxn tic-tac-toe board (vec of vec of chars)
   A nxn board of regular tic-tac-toe boards (where each space is a Board)
   A nxn board is won by winning each game for a space for either X or O, e.g.
   X wins all spaces in a row, or diagonally, etc."
  (move
    [this c y x])
  (suggest-move
    [this c])
  (score
    [this])
  (win?
    [this]))

(defrecord Board
           [rows])

(defrecord MetaBoard
           [rows])

(defn new-game
  "Makes an empty game"
  [n]
  (let [n2 (Math/pow n 2)]
    (->MetaBoard (->>
                  ;; make nxn nils
                  (repeat nil)
                  (take n2)
                  ;; partition into a board
                  (partition-all n)
                  repeat
                  ;; using a stream of empty boards, take nxn empty boards
                  (take n2)
                  (map ->Board)
                  (partition-all n)
                  ;; convert everything into vecs
                  (walk/prewalk
                   #(if (sequential? %)
                      (into [] %)
                      %))))))

(extend-type Board
  TicTacToe
  (move [{:keys [rows] :as board} c y x]
    (if (< (max y x) (count rows))
      (->Board (assoc-in rows [y x] c))
      board))
  (suggest-move
    [{:keys [rows] :as board} c]
    (let [n (count rows)
          scores (->> (score board)
                      (map #(select-keys % [c]))
                      (filter not-empty)
                      (sort-by (comp max vals) >))
          p-first-nil #(when (nil? %2)
                         %1)]
      (loop [[s & rest] scores]
        (if-let [move (match/match [(meta s)]
                        [{:dir :fwd-diag}] (when-let [yx (->> (range n)
                                                              (map get rows)
                                                              (keep-indexed p-first-nil)
                                                              first)]
                                             [yx yx])
                        [{:dir :rev-diag}] (when-let [yx (->> (range n)
                                                              (map get (reverse rows))
                                                              (keep-indexed p-first-nil)
                                                              first)]
                                             [yx yx])
                        [{:dir :col :n x}] (when-let [y (->> rows
                                                             (map #(get % x))
                                                             (keep-indexed p-first-nil)
                                                             first)]
                                             [y x])
                        [{:dir :row :n y}] (when-let [x (->> (get rows y)
                                                             (keep-indexed p-first-nil)
                                                             first)]
                                             [y x])
                        :else nil)]
          move
          (recur rest)))))
  (score [{:keys [rows]}]
    (let [n (count rows)
          fwd-diag (with-meta
                     (->> (range n)
                          (map get rows)
                          frequencies)
                     {:dir :fwd-diag})
          rev-diag (with-meta
                     (->> (range n)
                          (map get (reverse rows))
                          frequencies)
                     {:dir :rev-diag})
          row-scores (map-indexed #(with-meta
                                     (frequencies %2)
                                     {:dir :row
                                      :n %1}) rows)
          col-scores (->> (range n)
                          (map #(map get rows (repeat n %)))
                          (map-indexed #(with-meta
                                          (frequencies %2)
                                          {:dir :col
                                           :n %1})))]
      (->> (concat row-scores col-scores)
           (cons fwd-diag)
           (cons rev-diag))))
  (win? [{:keys [rows] :as board}]
    (->> (score board)
         (mapcat seq)
         (filter (comp #{(count rows)} last))
         first)))

(extend-type MetaBoard
  TicTacToe
  (move [{:keys [rows]} ^Board board y x]
    (->MetaBoard (assoc-in rows [y x] board)))
  (win? [{:keys [rows]}]
    (win? (->Board (map (partial map win?) rows))))
  (score [{:keys [rows]}]
    (mapcat #(mapcat score %) rows)))

(comment
  (require '[clojure.pprint :as pprint])

  (let [another-board (->Board [[nil \o nil]
                                [\o \x \o]
                                [\o \o nil]])]
    (move another-board \x 2 2))

  (let [almost (->Board [[\x \o \o]
                         [\o \x \o]
                         [\o \o nil]])
        diag-fwd (->Board [[\x \o \o]
                           [\o \x \o]
                           [\o \o \x]])
        diag-bwd (->Board [[\x \o \o]
                           [\o \o \x]
                           [\o \o \x]])
        almost-meta (->MetaBoard [[diag-fwd diag-bwd diag-bwd]
                                  [diag-bwd diag-fwd diag-bwd]
                                  [diag-bwd diag-bwd almost]])]
    (score almost-meta))

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
                         [\o \o nil]])
        diag-fwd (->Board [[\x \o \o]
                           [\o \x \o]
                           [\o \o \x]])
        diag-bwd (->Board [[\x \o \o]
                           [\o \o \x]
                           [\o \o \x]])
        almost-meta (->MetaBoard [[diag-fwd diag-bwd diag-bwd]
                                  [diag-bwd diag-fwd diag-bwd]
                                  [diag-bwd diag-bwd almost]])]
    {:almost-win (win? almost)
     :won (win?
           (move almost \x 2 2))
     :almost-win-meta (win? almost-meta)
     :won-meta (let [last (get-in (:rows almost-meta)
                                  [2 2])]
                 (win?
                  (move almost-meta
                        (move last \x 2 2) 2 2)))}))