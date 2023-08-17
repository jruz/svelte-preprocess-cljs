import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { compileString } from "squint-cljs/lib/compiler.js";

const squint = () => ({
  name: "svelte-plugin-squint",
  script({ content, attributes: { lang } }) {
    if (lang !== "cljs") return;

    try {
      const code = compileString(content);
      return { code };
    } catch (e) {
      console.log(e);
    }
  },
});

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [squint(), vitePreprocess()],
};
