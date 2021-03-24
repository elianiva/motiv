<div
  class="p-8 flex flex-col {isInverted ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-8 rounded-lg bg-white mb-6 shadow-lg"
>
  <div class="flex flex-col items-center justify-center sm:w-1/4">
    <img
      class="w-24 h-24 rounded-full bg-gray-200 mb-4"
      src="/images/placeholder.webp"
      alt="fullname"
    />
    <span
      class="capitalize nunito text-gray-900 text-xl font-bold"
    >{name}</span>
    <span class="text-lg capitalize nunito text-gray-900">{role}</span>
  </div>
  <div class="text-left sm:w-3/4">
    <p class="leading-relaxed text-lg text-gray-800">{desc}</p>
  </div>
</div>

<script>
export let name, desc, role, isInverted
</script>
