<template>
  <div>
    <ProfileTimeline />
  </div>
</template>

<script>
export default {
  layout: "profile",
  // OR
  layout(context) {
    return "profile";
  },
};
</script>
