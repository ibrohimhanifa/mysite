<template>
  <pageTransition name="page">
    <div class="m-8">
      <nuxt-link to="/" class="btn">Back</nuxt-link>
    </div>
    <div class="flex justify-center items-center min-h-screen">
      <ProfileMenu />
    </div>
  </pageTransition>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply shadow-md font-semibold py-3 px-6 text-gray-100 cursor-pointer bg-gray-900 rounded-lg text-lg text-center w-48;
}

.btn:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}
</style>