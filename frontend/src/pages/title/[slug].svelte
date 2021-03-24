<style>
.prev,
.next {
  display: none;
}

@media only screen and (min-width: 800px) {
  .prev,
  .next {
    display: flex;
  }
}

.background {
  background-color: #555555;
}

#article {
  transition: all ease-out 0.5s;
}

:global(html) {
  scrollbar-color: transparent;
}

:global(html::-webkit-scrollbar-thumb) {
  background-color: transparent;
}

:global(html::-webkit-scrollbar) {
  background-color: transparent;
  width: 0;
}
</style>

<svelte:window bind:innerWidth={width} />

<div
  class="min-h-screen flex items-center justify-center mx-auto h-screen background"
>
  <div
    class="fixed top-0 left-0 bg-black z-10 text-white flex items-center p-2"
  >
    <a class="hover:text-orange-600" href="/">Kembali ke halaman awal</a>
  </div>
  <div
    class="prev fixed top-0 bottom-0 left-0 w-1/2 flex items-center justify-center cursor-pointer z-20"
    on:click={prevPage}
  />
  <div id="article" class="z-30" bind:this={page}>
    <div />
  </div>
  <div
    class="next fixed top-0 bottom-0 right-0 w-1/2 flex items-center justify-center cursor-pointer z-20"
    on:click={nextPage}
  />
</div>

<script>
import { metatags, ready } from "@roxi/routify"
import { onMount } from "svelte"
import jquery from "jquery"
import "@ksedline/turnjs"
export let slug
import "../../Swiper"

let article = { pagesUrls: [] }

const nextPage = () => jquery("#article").turn("next")
const prevPage = () => jquery("#article").turn("previous")

const getArticle = async id => {
  const req = await fetch(`https://madig-api.vercel.app/api/majalah?id=${id}`)
  const res = await req.json()
  article = res
  article.pagesUrls.forEach((url, idx) => {
    const img = jquery("<div />").html(
      `<img class="w-full h-full object-cover block page" src="/${url}" alt="image" />`
    )
    jquery("#article").turn("addPage", img, idx + 1)
  })

  $ready()
}

$: getArticle(slug)

let width

onMount(() => {
  const flipbook = jquery("#article")
  flipbook.turn({
    width: width > 800 ? 848 : width,
    height: width > 800 ? 600 : width * 1.5,
    elevation: 1,
    gradients: true,
    elevation: 50,
    acceleration: true,
    autoCenter: false,
    display: width > 800 ? "double" : "single",
  })
  flipbook.on("swiped-left", nextPage)
  flipbook.on("swiped-right", prevPage)
  flipbook.on("click", e => (isZoomed ? zoom(e, false) : zoom(e, true)))

  window.addEventListener("keyup", e => {
    if (e.key === "ArrowRight" || e.key === " ") nextPage()
    else if (e.key === "ArrowLeft") prevPage()
  })
})

let page, isZoomed

const zoom = (e, zoomOut) => {
  if (isZoomed) {
    isZoomed = zoomOut
    page.style.transform = "scale(1)"
    return
  }
  const width = page.offsetWidth
  const height = page.offsetHeight
  let xpercent = (e.offsetX * 100) / width
  let ypercent = (e.offsetY * 100) / height
  page.style.transform = "scale(2)"
  page.style.transformOrigin = `${xpercent}% ${ypercent}%`
  isZoomed = true
}

metatags.title = `Baca Majalah |  Maspion IT - Icon IT Indonesia`
metatags.description = "Majalah Digital Maspion.IT"
</script>
