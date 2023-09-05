(ns n-tac-toe.events
  (:require
   [re-frame.core :as re-frame]
   [n-tac-toe.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [n-tac-toe.game :as game]))

(defonce next-play
  {"x" "o"
   "o" "x"})

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-db
 ::new-game
 (fn-traced
  [db _]
  (assoc db
         :game (game/new-game 3)
         :turn \x)))

(re-frame/reg-event-fx
 ::play
 (fn-traced
  [{{:keys [game turn] :as db} :db} [_ c yb xb y x]]
  (let [new-board (-> game
                      (get-in [:rows yb xb])
                      (game/move c y x))]
    
    {:db (assoc db
                :game (game/move game new-board yb xb)
                :turn (get next-play c)
                :allowed [y x])
     :fx [(when (= turn \x)
            [:dispatch [::cpu-play y x]])]})))

(re-frame/reg-event-fx
 ::cpu-play
 (fn-traced 
  [{{:keys [game turn] :as db} :db} [_ yb xb]]
  (if (= turn \o)
    (let [board (get-in game [:rows yb xb])
          [cpu-y cpu-x] (game/suggest-move board \o)]
      {:db db
       :fx [[:dispatch [::play \o yb xb cpu-y cpu-x]]]})
    {:db db})))

(re-frame/reg-event-fx
 ::navigate
 (fn-traced [_ [_ handler]]
            {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn-traced [{:keys [db]} [_ active-panel]]
            {:db (assoc db :active-panel active-panel)}))
