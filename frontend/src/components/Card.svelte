<style>
img {
  min-height: 22rem;
}

img:hover {
  filter: brightness(0.75);
  transition: filter ease-out 0.2s;
}
@media only screen and (max-width: 800px) {
  img {
    min-height: 30rem;
  }
}
</style>

<a
  href={$url('/article/:id', { id })}
  class="shadow-md bg-white"
>
  <img
    src="/{img}"
    alt={title}
    class="w-full object-cover object-top"
    loading="lazy"
  />
  <div class="p-4">
    <span
      class="text-gray-800 text-lg font-bold capitalize nunito whitespace-pre-wrap"
    >{title}</span>
    <span class="text-gray-800 flex items-center gap-1 text-sm">
      <Calendar width="0.75rem" height="0.75rem" />
      {new Date(publish_date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </span>
    <hr class="my-2" />
    <p class="open-sans text-gray-700">{desc && desc.substr(0, 50)}...</p>
  </div>
</a>

<script>
import { url } from "@roxi/routify"
import { fly } from "svelte/transition"
import Calendar from "../icons/calendar.svg"
export let title, publish_date, desc, img, id
</script>
