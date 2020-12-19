<template>
<!-- component -->
<div class="flex flex-wrap items-center justify-center">
  <nuxt-link to="/profile/work">
    <div class="card bg-orange-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <img class="image" src="~assets/img/work.svg" alt="work">
      <span class="text">Work</span>
    </div>
  </nuxt-link>
  <nuxt-link to="/profile/project">
    <div class="card bg-teal-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <img class="image" src="~assets/img/project.svg" alt="project">
      <span class="text">Projcet</span>
    </div>
  </nuxt-link>
  <nuxt-link to="/profile/work">
    <div class="card bg-purple-500 hover:text-purple-500">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <img class="image" src="~assets/img/organization.svg" alt="organization">
      <span class="text">Organization</span>
    </div>
  </nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply flex-shrink-0 m-6 relative text-white overflow-hidden rounded-lg max-w-xs shadow-lg;
  &:hover {
    @apply text-gray-900 bg-white shadow-2xl;
  }
}
.text {
  @apply relative p-6  font-semibold text-xl flex items-center justify-center;
}
.image {
  @apply relative px-6 pt-6 flex items-center justify-center w-56 h-56; 
}

</style>
