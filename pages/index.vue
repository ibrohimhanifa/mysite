<template>
  <div class="flex justify-center items-center min-h-screen">
    <nuxt-link to="/home">
      <button class="btn btn-index transition duration-200 ease-in-out">
        <strong>اَلسَّلَامُ عَلَيْكُم</strong>
        <br />(peace be upon you)
      </button>
    </nuxt-link>
    <!-- <pageTransition name="page">
    </pageTransition>-->
  </div>
</template>


<style lang="postcss" scoped>
.btn {
  @apply font-semibold py-4 px-6 rounded-lg text-lg tracking-tight;
}
.btn-index {
  @apply text-black bg-white;
}
.btn-index:hover {
  @apply text-black bg-white shadow-2xl transform -translate-y-3 scale-110;
}
</style>