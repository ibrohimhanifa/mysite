<template>
  <div class="flex justify-center items-center min-h-screen">
    <nuxt-link to="/home">
      <span class="btn btn-index">Let's Go!</span>
    </nuxt-link>
    <!-- <pageTransition name="page">
    </pageTransition>-->
  </div>
</template>


<style lang="postcss" scoped>
.btn {
  @apply font-bold py-4 px-6 rounded-lg text-lg tracking-tight;
}
.btn-index {
  @apply text-black bg-white;
}
.btn-index:hover {
  @apply text-black bg-white shadow-lg;
}
</style>