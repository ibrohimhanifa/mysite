<template>
  <div id="menu" class="container mx-auto flex justify-center items-center min-h-screen">
    <div class="col-span-1 flex justify-center items-center">
      <div v-for="menu in menus" :key="menu">
        <nuxt-link v-bind:to="menu.link">
          <span class="btn btn-menu transition duration-200 ease-in-out">{{ menu.name }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.btn {
  @apply font-bold py-6 px-12 rounded-lg text-lg tracking-tight mx-10;
}
.btn-menu {
  @apply text-black;
}
.btn-menu:hover {
  @apply text-white bg-indigo-500 shadow-2xl transform -translate-y-3 scale-110;
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
        {
          name: "Design",
          col: "bg-yellow-400",
          link: "/design",
          desc: "Ini adalah Design",
        },
        {
          name: "Other",
          col: "bg-yellow-400",
          link: "/other",
          desc: "Ini adalah Other",
        },
      ],
    };
  },
};
</script>