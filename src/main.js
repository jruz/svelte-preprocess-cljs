import * as squint_core from "squint-cljs/core.js";
import * as squint from "squint-cljs/lib/compiler.js";
var script = function (opts) {
  let content1 = squint_core.get(opts, "content");
  let attributes2 = squint_core.get(opts, "attributes");
  let lang3 = squint_core.get(attributes2, "lang");
  if (lang3 === "cljs") {
    return (function () {
      try {
        return { code: squint.compileString(content1) };
      } catch (err) {
        return console.log(err);
      }
    })();
  }
};
var cljsPreprocess = function () {
  return { name: "svelte-preprocess-cljs", script: script };
};
export { script, cljsPreprocess };
