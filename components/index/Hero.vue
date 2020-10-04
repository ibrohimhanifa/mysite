<template>
  <div class="m-auto max-w-6xl p-12">
    <div class="flex flex-col md:flex-row justify-evenly">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="md:text-5xl text-2xl uppercase font-black text-gray-900">
          Ibrohim Hanifa
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 mr-2 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <div class="md:text-lg text-md font-semibold text-gray-00">
            hanifa.ibrohim@gmail.com
          </div>
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 mr-2 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>

          <div class="md:text-lg text-md font-semibold text-gray-900">
            Jakarta, ID
          </div>
        </div>
        <div class="my-8 h-16">
          <nuxt-link to="/blog" class="btn">Blog (ID)</nuxt-link>
          <nuxt-link to="/profile" class="btn">Profile</nuxt-link>
        </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="shadow-2xl max-w-md z-10 rounded-20 mt-6 md:ml-4">
          <img
            alt="card rounded-lg img"
            class="rounded-t"
            src="~/assets/img/hero2.png"
          />
          <div
            class="rounded-b-lg md:text-2xl text-xl p-10 bg-gray-900 text-white"
          >
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
  @apply shadow-md font-semibold py-3 px-6 text-gray-100 cursor-pointer bg-gray-900 rounded-lg text-lg text-center w-48;
}

.btn:hover {
  @apply text-gray-900 bg-white shadow-2xl;
}
</style>