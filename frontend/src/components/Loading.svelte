<style>
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.25rem;
  z-index: 50;
  transition: width ease-out 0.5s;
  width: 0;
}
</style>

{#if $isChangingPage}
  <div class="bg-orange-500 loading-bar" style="width: {width}%" />
{/if}

<script>
import { onMount, onDestroy } from "svelte"
import { isChangingPage } from "@roxi/routify"

let counter
let width = 0
let speed = 10

const resetProgress = () => {
  clearInterval(counter)
  width = 0
  speed = 0
}

const startProgress = () => {
  counter = setInterval(() => {
    if (width === 95) {
      clearInterval(counter)
      return
    }
    width += 5
    speed += 500
  }, speed)
}

$: if (!$isChangingPage) resetProgress()
$: if ($isChangingPage) startProgress()

onMount(() => startProgress())
onDestroy(() => resetProgress())
</script>
