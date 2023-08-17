import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { cljsPreprocess } from "svelte-preprocess-squint";

export default {
  preprocess: [cljsPreprocess(), vitePreprocess()],
};
