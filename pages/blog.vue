<template>
  <pageTransition name="page">
    <NavBar />
    <div class="flex justify-center items-center min-h-screen"></div>
  </pageTransition>
</template>


<style lang="postcss">
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