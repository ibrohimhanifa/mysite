<template>
<div>
    <div class="p-8">
      <div class="flex items-center justify-between">
        <nuxt-link to="/profile" class="btn">Back</nuxt-link>
        <nuxt-link to="/" class="btn-home"></nuxt-link>
      </div>
    </div>
</div>
</template>

<style lang="postcss" scoped>
.btn {
  @apply shadow-md font-semibold py-3 px-6 text-gray-100 cursor-pointer bg-gray-900 rounded-lg text-lg text-center;
}

.btn:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}

.btn-home {
  @apply shadow-md h-10 w-10 rounded-full bg-gray-900 text-lg text-center;
}

.btn-home:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}
</style>