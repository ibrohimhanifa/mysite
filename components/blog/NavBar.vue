<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-grey mr-6">
      <nuxt-link to="/home">
        <span>
          <!-- logo -->
          <img src="~/assets/img/logo.png" class="fill-current h-8 mr-2" />
        </span>
        <!-- logo -->
      </nuxt-link>
      <nuxt-link to="/home">
        <span class="font-semibold text-xl tracking-tight">Ibrohim Hanifa</span>
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-grey-200 border-grey-400 hover:text-black hover:border-black"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <!-- <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="nav">Docs</a>
          <a href="#responsive-header" class="nav">Examples</a>
          <a href="#responsive-header" class="nav">Blog</a>
        </div>
        <div>
          <a href="/home" class="btn btn-index">Home</a>
        </div>
    </div>-->
  </nav>
</template>

<style lang="postcss" scoped>
.nav {
  @apply text-black mx-2 inline-block px-4 py-2;
}

.nav:hover {
  @apply text-white rounded bg-black;
}
.btn {
  @apply py-4 px-6 rounded-lg tracking-tight;
}
.btn-index {
  @apply text-black bg-white;
}
.btn-index:hover {
  @apply text-black bg-white shadow-lg;
}

/* .download {
  @apply inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-black  border-black;
}

.download:hover {
  @apply text-black bg-white;
} */
</style>