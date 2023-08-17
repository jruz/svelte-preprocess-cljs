ClojureScript preprocessor for Svelte using [Squint](https://github.com/squint-cljs/squint)

[Counter.svelte](example/src/lib/Counter.svelte)

```svelte
<script lang="cljs">
  (def counter 0)

  (defn increment []
    (set! counter (inc counter)))
</script>

<button on:click={increment}>
  count is {counter}
</button>
```

## Install

```bash
npm install -D svelte-preprocess-cljs
```

add to `svelte.config.js`

```js
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { cljsPreprocess } from "svelte-preprocess-squint";

export default {
  preprocess: [cljsPreprocess(), vitePreprocess()],
};
```
