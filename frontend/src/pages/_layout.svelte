<Loading />
<main class="flex flex-col">
  <Header />
  <div class="flex-1 min-h-screen">
    <slot />
  </div>
  <Footer />
</main>

<script>
import Header from "../components/Header.svelte"
import Footer from "../components/Footer.svelte"
import Loading from "../components/Loading.svelte"
</script>
