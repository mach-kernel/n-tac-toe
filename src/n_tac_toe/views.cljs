(ns n-tac-toe.views
  (:require
   [re-frame.core :as re-frame]
   [n-tac-toe.styles :as styles]
   [n-tac-toe.events :as events]
   [n-tac-toe.routes :as routes]
   [n-tac-toe.subs :as subs]
   [n-tac-toe.components.board :refer [board]]))


;; home

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])
        game (re-frame/subscribe [::subs/game])]
    [:div
     [:h1
      {:class (styles/level1)}
      (str "Hello from " @name ". This is the Home Page.")]
     [:button {:on-click #(re-frame/dispatch [::events/new-game])} "New game"]
     (when @game
       [board @game])
     [:div
      [:a {:on-click #(re-frame/dispatch [::events/navigate :about])}
       "go to About Page"]]]))

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
