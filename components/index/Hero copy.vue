<template>
  <!-- component -->
  <div class="m-auto max-w-6xl p-12">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="md:text-5xl text-2xl font-black">
          <strong>Ibrohim</strong> Hanifa
        </div>
        <div class="md:text-5md text-lg font-semibold text-gray-800">hanifa.ibrohim@gmail.com</div>
        <div class="text-gray-800 font-bold py-2 inline-flex items-center">
          <svg
            class="w-5 h-5 mr-3 text-indigo-600"
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
          <span class="font-semibold">Jakarta, ID</span>
        </div>

        <!-- Map Indonesia -->
        <div class="my-5 p-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Indonesia.svg" alt />
        </div>

        <Menu />
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="bg-dots">
          <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
            <img alt="card img" class="rounded-t" src="~/assets/img/hero.jpg" />
            <div class="text-2xl p-10 bg-white">
              Hey there, i'm
              <strong>Boim</strong>
              <br />your future
              <strong>President</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bg-dots {
  background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
  background-repeat: no-repeat;
}

strong {
  color: #5a67d8;
}

.btn {
  @apply font-bold py-4 px-6 rounded-lg text-lg tracking-tight;
}

.btn-menu {
  @apply text-black;
}

.btn-menu:hover {
  @apply text-black shadow-2xl transform -translate-y-3 scale-110;
}
</style>