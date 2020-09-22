<template>
  <!-- Side Nav Bar-->
  <aside class="flex flex-col items-center bg-white text-gray-700 h-full">
    <div class="h-16 flex items-center w-full">
      <nuxt-link class="h-6 w-6 mx-auto" to="/home">
        <!-- logo -->
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <!-- logo -->
      </nuxt-link>
    </div>

    <ul>
      <!-- Items Profile -->
      <li class="hover:bg-indigo-100">
        <nuxt-link
          to="/profile"
          class="h-16 px-6 flex justify-center items-center w-full focus:text-indigo-500"
        >
          <svg
            class="h-5 w-5"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </nuxt-link>
      </li>
      <!-- Items Timeline -->
      <li class="hover:bg-indigo-100">
        <nuxt-link
          to="/profile/timeline"
          class="h-16 px-6 flex justify-center items-center w-full focus:text-indigo-500"
        >
          <svg
            class="h-5 w-5"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
            />
          </svg>
        </nuxt-link>
      </li>
      <!-- Items Project -->
      <li class="hover:bg-indigo-100">
        <nuxt-link
          to="/profile/timeline"
          class="h-16 px-6 flex justify-center items-center w-full focus:text-indigo-500"
        >
          <svg
            class="h-5 w-5"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </nuxt-link>
      </li>
    </ul>

    <div class="mt-auto h-16 flex items-center w-full">
      <!-- Action Download -->
      <button
        class="h-16 mx-auto flex justify-center items-center w-16 focus:text-indigo-500 hover:bg-indigo-100 focus:outline-none"
      >
        <svg
          class="h-5 w-5 text-blue-700"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </div>
  </aside>
  <!-- </div> -->
</template>