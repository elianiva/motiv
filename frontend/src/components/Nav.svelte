<style>
span {
  background-color: #ffffff;
  height: 0.0625rem;
  transition: all ease-out 0.2s;
}

.active .slice-1 {
  transform: translate3d(0, 0.25rem, 0);
}

.active .slice-2 {
  transform: scale(0);
}

.active .slice-3 {
  transform: translate3d(0, -0.25rem, 0);
}
</style>

<div
  class="bg-gray-800 w-8 h-8 absolute top-0 right-0 grid-rows-3 p-2 items-center cursor-pointer z-50 grid sm:hidden"
  class:active={isVisible}
  on:click={() => (isVisible = !isVisible)}
>
  <span class="slice-1" />
  <span class="slice-2" />
  <span class="slice-3" />
</div>

{#if isVisible}
  <div
    transition:fly={{ duration: 200, y: -100 }}
    class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
  >
    {#each navItems as [link, name]}
      <a
        class="text-2xl font-bold nunito cursor-pointer hover:text-orange-500 text-gray-700"
        href={$url('/:link', { link })}
        on:click={() => isVisible = !isVisible}
      >{name}</a>
    {/each}
  </div>
{/if}

<script>
import { url } from "@roxi/routify"
import { fly } from "svelte/transition"
let isVisible = false

const navItems = [
  ["", "Beranda"],
  ["cari", "Cari Majalah"],
  ["tim", "Tim Redaksi"],
  ["tentang", "Tentang"],
]
</script>
