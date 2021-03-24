<style>
header {
  background-image: url("/images/circuit-pattern.svg");
  background-repeat: repeat;
}

nav a {
  position: relative;
  transition: all ease-out 0.2s;
}

nav a:not(:first-child)::before {
  content: "";
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 0rem;
  width: 0.0625rem;
  background-color: #cbd5e0;
}
</style>

<header class="py-8 px-4 bg-white shadow-md sm:shadow-none">
  <div
    class="mx-auto max-w-screen-lg flex flex-col justify-center items-center h-full gap-2 relative"
  >
    <div class="absolute left-0 top-0 flex gap-4">
      <a
        class="hover:text-orange-500 text-gray-800"
        href="https://www.facebook.com/maspion.it/"
        rel="norel noreferrer"
        target="_blank"
        aria-label="facebook"
      >
        <Facebook width="1.5rem" height="1.5rem" />
      </a>
      <a
        class="hover:text-orange-500 text-gray-800"
        href="https://www.instagram.com/maspion.it/"
        rel="norel noreferrer"
        target="_blank"
        aria-label="facebook"
      >
        <Instagram width="1.5rem" height="1.5rem" />
      </a>
      <a
        class="hover:text-orange-500 text-gray-800"
        href="https://wa.me/6287851614705"
        rel="norel noreferrer"
        target="_blank"
        aria-label="facebook"
      >
        <Whatsapp width="1.5rem" height="1.5rem" />
      </a>
    </div>
    <a href={$url('/')} aria-label="motiv">
      <img
        class="w-56 h-auto pt-16 sm:pt-0 object-cover"
        src="/images/logo.png"
        alt="logo"
      />
    </a>
    <Nav />
  </div>
</header>
<nav class="border-t-2 border-gray-200 shadow-md bg-white hidden sm:block">
  <div
    class="grid grid-cols-4-responsive mx-auto justify-center justify-items-center items-center text-center max-w-screen-lg"
  >
    {#each categories as [link, name]}
      <a
        href={$url('/:link', { link })}
        class="w-full oswald text-xl text-gray-700 hover:bg-gray-200 px-4 py-2 uppercase"
      >{name}</a>
    {/each}
  </div>
</nav>

<script>
import { url } from "@roxi/routify"
import Nav from "../components/Nav.svelte"
import Facebook from "../icons/fb.svg"
import Instagram from "../icons/ig.svg"
import Whatsapp from "../icons/wa.svg"

const categories = [
  ["", "Beranda"],
  ["cari", "Cari Majalah"],
  ["tim", "Tim Redaksi"],
  ["tentang", "Tentang"],
]
</script>
