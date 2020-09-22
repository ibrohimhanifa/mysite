<template>
  <div class="m-auto max-w-6xl p-12">
    <div class="flex flex-col md:flex-row justify-evenly">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="md:text-5xl text-2xl uppercase font-black">
          <strong>Ibrohim</strong> Hanifa
        </div>
        <div class="md:text-lg text-md font-semibold text-gray-00">hanifa.ibrohim@gmail.com</div>
        <div class="md:text-lg text-md font-semibold text-gray-00">Jakarta, ID</div>
        <div class="my-8 h-16">
          <nuxt-link to="/blog" class="btn">Blog (ID)</nuxt-link>
          <nuxt-link to="/profile" class="btn">Profile</nuxt-link>
        </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
          <img alt="card img" class="rounded-t" src="~/assets/img/hero2.png" />
          <div class="md:text-2xl text-xl p-10 bg-white">
            Hey there, i'm
            <strong>Boim</strong>
            <br />your future
            <strong>President</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style lang="postcss" scoped>
.btn {
  @apply shadow-md font-semibold py-3 px-6 text-gray-100 cursor-pointer bg-black rounded-lg text-lg text-center w-48;
}

.btn:hover {
  @apply text-black bg-white shadow-2xl;
}
</style>