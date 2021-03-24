<style>
img {
  min-height: 30rem;
}
</style>

<div
  class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-8 px-4 my-10 items-center"
>
  <div class="col-span-1">
    <img
      class="shadow-lg object-cover w-full"
      src="/{article.coverUrl}"
      alt={article.title}
      loading="lazy"
    />
  </div>
  <div class="flex flex-col col-span-2 relative">
    <h1 class="mt-4 sm:mt-0 text-3xl font-bold nunito capitalize text-gray-800">
      {article.judul || "__judul__"}
    </h1>
    <div class="flex flex-row items-start gap-2">
      <span
        class="text-md text-gray-800 open-sans px-2 bg-gray-300 rounded-sm"
      >{article.jumlahHalaman || "__jml__"}
        Halaman
      </span>
      <span class="text-md text-gray-800 open-sans px-2 bg-gray-300 rounded-sm">
        Terbit
        {new Date(article.tanggalTerbit).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </span>
    </div>
    <p class="my-6 text-lg leading-relaxed text-gray-700 open-sans">
      {article.desc || "__short_desc_content__"}
    </p>
    <div class="flex gap-4">
      <a
        href={$url('/title/:slug', { slug: slug })}
        class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-sm text-white font-bold nunito shadow-blue"
      >
        Baca Majalah
      </a>
    </div>
  </div>
</div>
<ScrollButton />

<script>
import { metatags, ready, url } from "@roxi/routify"
import ScrollButton from "../../components/ScrollButton.svelte"
export let slug

let article = {}

const getArticle = async id => {
  const req = await fetch(`https://madig-api.vercel.app/api/majalah?id=${id}`)
  const res = await req.json()
  article = res
  $ready()
}

$: getArticle(slug)

metatags.title = `Majalah | Maspion IT - Icon IT Indonesia`
metatags.description = "Majalah Digital Maspion.IT"
</script>
