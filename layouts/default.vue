<template>
  <div :class="{ 'fade-in': showContent }">
    <NuxtPage />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
  mounted() {
    // Delay to simulate loading and then show content
    setTimeout(() => {
      this.showContent = true;
    }, -1000); // Adjust the delay as needed
  },
};
</script>

<style>
@import "~/assets/css/animations.css";
</style>
