(ns n-tac-toe.views
  (:require
   [re-frame.core :as re-frame]
   [n-tac-toe.events :as events]
   [n-tac-toe.routes :as routes]
   [n-tac-toe.subs :as subs]
   [n-tac-toe.components.board :refer [board]]))


;; home

(defn home-panel []
  (let [game (re-frame/subscribe [::subs/game])
        win? (re-frame/subscribe [::subs/win?])]
    [:div
     {:class "sans-serif h-100 w-100 pa2"}
     [:h1 {:class "f1 lh-title"} "n-tac-toe"]
     (when-let [[player _] @win?]
       [:h2 {:class (str 
                     "f3 lh-copy "
                     (if (= player \x)
                       "green"
                       "red"))} (str player " wins!")])
     (when (or (not @game)
               @win?)
       [:button
        {:on-click #(re-frame/dispatch [::events/new-game])}
        "New game"])
     (when @game
       [board @game])]))

(defmethod routes/panels :home-panel [] [home-panel])

;; about

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]

   [:div
    [:a {:on-click #(re-frame/dispatch [::events/navigate :home])}
     "go to Home Page"]]])

(defmethod routes/panels :about-panel [] [about-panel])

;; main

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
