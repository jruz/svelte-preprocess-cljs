<script lang="cljs">
  (def counter 0)

  (defn increment []
    (set! counter (inc counter)))
</script>

<button on:click={increment}>
  count is {counter}
</button>
