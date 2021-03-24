<style>
div {
  right: 2rem;
  bottom: 2rem;
  z-index: 10;
  transition: all ease-out 0.2s;
}

div:hover {
  filter: brightness(1.2);
}
</style>

<svelte:window bind:scrollY={currentPosition} />

{#if currentPosition > 50}
  <div
    class="fixed w-8 h-8 rounded-full bg-orange-500 shadow-lg flex items-center justify-center cursor-pointer text-white"
    on:click={scrollToTop}
    transition:fade={{ duration: 100 }}
  >
    <Up width="1.5rem" height="1.5rem" class="button__icon" />
  </div>
{/if}

<script>
import { fade } from "svelte/transition"
import Up from "../icons/up.svg"

let currentPosition

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
</script>
