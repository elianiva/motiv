<div class="max-w-screen-lg mx-auto px-4 nunito mt-8">
  <span class="text-2xl text-center font-bold text-gray-800 block mb-4">
    Cari Majalah
  </span>
  <div class="flex gap-2 max-w-3xl mx-auto">
    <input
      class="w-full p-2 text-lg rounded-sm shadow-md outline-none focus:shadow-outline"
      type="text"
      name="cari"
      placeholder="Masukkan nama majalah disini..."
      bind:value={query}
      on:keydown={e => {
        if (e.key === 'Enter') filterArticle()
      }}
    />
    <button
      class="py-2 px-4 bg-orange-500 text-white nunito font-bold"
      on:click={filterArticle}
    >Cari</button>
  </div>
  <div
    class="max-w-screen-lg mx-auto mb-8 pt-4 grid grid-cols-4-responsive sm:grid-cols-4-responsive-sm gap-4"
  >
    {#each results as { _id, judul, desc, coverUrl, tanggalTerbit }}
      <Card
        id={_id}
        title={judul}
        {desc}
        img={coverUrl}
        publish_date={tanggalTerbit}
      />
    {/each}
  </div>
</div>

<script>
import { onMount } from "svelte"
import { ready, metatags } from "@roxi/routify"
import Card from "../components/Card.svelte"

let results = []
let query = ""

// sanitize input
const mysql_real_escape_string = str => {
  if (typeof str != "string") return str

  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0"
      case "\x08":
        return "\\b"
      case "\x09":
        return "\\t"
      case "\x1a":
        return "\\z"
      case "\n":
        return "\\n"
      case "\r":
        return "\\r"
      case '"':
      case "'":
      case "\\":
      case "%":
        // prepends a backslash to backslash, percent,
        // and double/single quotes
        return "\\" + char
    }
  })
}

const getArticles = async () => {
  const req = await fetch("https://madig-api.vercel.app/api/majalah?type=all")
  const res = await req.json()
  results = res
  $ready()
}

const filterArticle = async () => {
  if (query === "") {
    getArticles()
    return
  }
  const req = await fetch(
    `https://madig-api.vercel.app/api/majalah?filter=${mysql_real_escape_string(
      query
    )}`
  )
  const res = await req.json()
  results = res
  $ready()
}

onMount(() => getArticles())

metatags.title = "Cari Artikel | Motiv"
metatags.description = "Majalah Digital Maspion.IT"
</script>
