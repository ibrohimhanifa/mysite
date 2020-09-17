<template>
  <pageTransition name="default">
    <NavBar />
    <div class="flex justify-center items-center min-h-screen">
      <nuxt-link to="/">
        <button class="btn btn-index text-bold">Back</button>
      </nuxt-link>
    </div>
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