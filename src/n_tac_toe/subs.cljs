(ns n-tac-toe.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::game
 (fn [db _]
   (:game db)))

(re-frame/reg-sub
 ::win?
 (fn [db _]
   (:win? db)))

(re-frame/reg-sub
 ::allowed
 (fn [{:keys [allowed game]}]
   (let [n (count (:rows game))]
     (or allowed [(rand-int n)
                  (rand-int n)]))))
