(ns mecca.core
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [re-pressed.core :as rp]
   [mecca.events]
   [mecca.subs]
   [mecca.view :as view]))

(rf/dispatch-sync [:initialize-db])

(rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])

(rf/dispatch
 [::rp/set-keydown-rules
  {:event-keys [[[:play-note 48] [{:keyCode 90}]]
                [[:play-note 49] [{:keyCode 83}]]
                [[:play-note 50] [{:keyCode 88}]]
                [[:play-note 51] [{:keyCode 68}]]
                [[:play-note 52] [{:keyCode 67}]]
                [[:play-note 53] [{:keyCode 86}]]
                [[:play-note 54] [{:keyCode 71}]]
                [[:play-note 55] [{:keyCode 66}]]
                [[:play-note 56] [{:keyCode 72}]]
                [[:play-note 57] [{:keyCode 78}]]
                [[:play-note 58] [{:keyCode 74}]]
                [[:play-note 59] [{:keyCode 77}]]
                [[:play-note 60] [{:keyCode 188}] [{:keyCode 81}]]
                [[:play-note 61] [{:keyCode 50}] [{:keyCode 76}]]
                [[:play-note 62] [{:keyCode 87}] [{:keyCode 190}]]
                [[:play-note 63] [{:keyCode 51}] [{:keyCode 186}]]
                [[:play-note 64] [{:keyCode 69}] [{:keyCode 191}]]
                [[:play-note 65] [{:keyCode 82}]]
                [[:play-note 66] [{:keyCode 53}]]
                [[:play-note 67] [{:keyCode 84}]]
                [[:play-note 68] [{:keyCode 54}]]
                [[:play-note 69] [{:keyCode 89}]]
                [[:play-note 70] [{:keyCode 55}]]
                [[:play-note 71] [{:keyCode 85}]]
                [[:play-note 72] [{:keyCode 73}]]
                [[:play-note 73] [{:keyCode 57}]]
                [[:play-note 74] [{:keyCode 79}]]
                [[:play-note 75] [{:keyCode 48}]]
                [[:play-note 76] [{:keyCode 80}]]
                [[:play-note 77] [{:keyCode 219}]]
                [[:play-note 78] [{:keyCode 187}]]
                [[:play-note 79] [{:keyCode 221}]]
                [[:play-note 80] [{:keyCode 8}]]
                [[:play-note 81] [{:keyCode 220}]]]}])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (r/render [view/mecca]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))