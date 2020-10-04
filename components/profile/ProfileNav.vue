<template>
  <!-- Side Nav Bar-->
  <aside class="flex flex-col items-center bg-white text-gray-700 h-full">
    <nuxt-link
      class="h-16 w-full mx-auto flex justify-center items-center"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="bg-gray-900 text-white h-8 mt-3 p-2 rounded-md fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </nuxt-link>

    <ul>
      <!-- Items Profile -->
      <li>
        <nuxt-link
          to="/profile"
          class="h-16 px-4 flex justify-center items-center w-full focus:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="nav"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="{2}"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </nuxt-link>
      </li>
      <!-- Items Work -->
      <li>
        <nuxt-link
          to="/profile/work"
          class="h-16 px-4 flex justify-center items-center w-full focus:text-gray-500"
        >
          <svg
            class="nav"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
        </nuxt-link>
      </li>
    </ul>

    <div class="mt-auto h-16 flex items-center w-full">
      <!-- Action Download -->
      <button class="h-16 mx-auto flex justify-center items-center w-16">
        <svg
          class="bg-gray-900 text-white h-8 mt-3 p-2 rounded-md fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </aside>
  <!-- </div> -->
</template>

<style lang="postcss" scoped>
.nav {
  @apply h-8 p-2 fill-current text-gray-900;
}
.nav:hover {
  @apply bg-gray-900 text-white rounded-md fill-current;
}
</style>