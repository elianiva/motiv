<div
  class="max-w-screen-lg mx-auto mb-8 px-4 pt-4 grid grid-cols-4-responsive sm:grid-cols-4-responsive-sm gap-4"
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
<ScrollButton />

<script>
import { metatags, ready } from "@roxi/routify"
import ScrollButton from "../components/ScrollButton.svelte"
import Card from "../components/Card.svelte"

let results = []
const getArticles = async () => {
  const req = await fetch("https://madig-api.vercel.app/api/majalah?type=all")
  const res = await req.json()
  results = res
  $ready()
}

$: getArticles()

metatags.title = "Beranda | Motiv"
metatags.description = "Majalah Digital Maspion.IT"
</script>
