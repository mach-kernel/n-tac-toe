(ns n-tac-toe.styles
  (:require-macros
    [garden.def :refer [defcssfn]])
  (:require
    [spade.core   :refer [defglobal defclass]]
    [garden.units :refer [deg px]]
    [garden.color :refer [rgba]]))

(defglobal defaults
  [:body
   {:background-color    :#fff}])
    
