<template>
  <div class="fixed top-0 h-screen w-screen flex">
    <ProfileNav />
    <pageTransition name="page">
      <Nuxt />
    </pageTransition>
  </div>
</template>
