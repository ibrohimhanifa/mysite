<template>
  <div class="flex justify-center items-center">
    <div v-for="menu in menus" :key="menu">
      <nuxt-link v-bind:to="menu.link">
        <button class="btn btn-menu transition duration-200 ease-in-out">{{ menu.name }}</button>
      </nuxt-link>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.btn {
  @apply font-bold py-3 px-6 rounded-lg text-lg tracking-tight mx-10;
}
.btn-menu {
  @apply text-white bg-indigo-500 shadow-2xl;
}
.btn-menu:hover {
  @apply text-black bg-white shadow-none transform scale-125;
}
</style>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "Blog (ID)",
          col: "bg-red-400",
          link: "/blog",
          desc: "Ini adalah Blog",
        },
        {
          name: "Profile",
          col: "bg-yellow-400",
          link: "/profile",
          desc: "Ini adalah Profile",
        },
        // {
        //   name: "Design",
        //   col: "bg-yellow-400",
        //   link: "/design",
        //   desc: "Ini adalah Design",
        // },
        // {
        //   name: "Other",
        //   col: "bg-yellow-400",
        //   link: "/other",
        //   desc: "Ini adalah Other",
        // },
      ],
    };
  },
};
</script>