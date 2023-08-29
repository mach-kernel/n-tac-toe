(ns n-tac-toe.components.board)

(defn board
  [n]
  (letfn [(make-row 
            []
            [:tr (->> (repeatedly #(vec [:td [:button "play"]]))
                      (take n))])]
    [:table (->> (repeatedly make-row)
                 (take n))]))
