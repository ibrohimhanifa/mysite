<template>
<!-- component -->
<div class="p-24 flex flex-wrap items-center justify-center">
  <nuxt-link to="/profile/work">
    <div class="card bg-orange-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <img class="relative w-40 h-40" src="~assets/img/work.svg" alt="">
      </div>
      <div class="text hover:text-orange-500">
          <span class="block font-semibold text-xl">Work</span>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link to="/profile/work">
    <div class="card bg-teal-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <img class="relative w-40 h-40" src="~assets/img/project.svg" alt="">
      </div>
      <div class="text hover:text-teal-500">
          <span class="block font-semibold text-xl">Projcet</span>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link to="/profile/work">
    <div class="card bg-purple-500 hover:text-purple-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <img class="relative w-40 h-40" src="~assets/img/organization.svg" alt="">
      </div>
      <div class="text">
          <span class="block font-semibold text-xl">Organization</span>
      </div>
    </div>
  </nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg;
}

.card:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}

.text {
  @apply relative px-6 pb-6 mt-6  text-white 
}


</style>