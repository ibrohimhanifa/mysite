<template>
  <pageTransition name="page">
    <div class="min-h-screen">
      <div class="p-8 flex flex-row-reverse">
        <nuxt-link to="/" class="btn-home"></nuxt-link>
      </div>
      <div class="flex justify-center items-center">
        <ProfileMenu />
      </div>
    </div>
  </pageTransition>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.btn-home {
  @apply shadow-md h-10 w-10 rounded-full bg-gray-900 text-lg text-center;
}

.btn-home:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}
</style>