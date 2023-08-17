(ns main
  (:require
   ["squint-cljs/lib/compiler.js" :as squint]))

(defn script
  [opts]
  (let [content (:content opts)
        attributes (:attributes opts)
        lang (:lang attributes)]
    (when (= lang "cljs")
      (try
        {:code (squint/compileString content)}
        (catch :default err
          (js/console.log err))))))

(defn cljsPreprocess []
  {:name "svelte-preprocess-cljs"
   :script script})
