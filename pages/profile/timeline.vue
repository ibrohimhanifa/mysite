<template>
  <div class="h-screen w-screen flex">
    <Timeline />
  </div>
</template>

<script>
export default {
  layout: "profile",
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-index {
  @apply bg-black text-white;
}
.btn-index:hover {
  @apply bg-black text-white shadow-md;
}
</style>