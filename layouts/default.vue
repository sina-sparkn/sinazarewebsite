<template>
  <div :class="{ 'fade-in': showContent }">
    <Preloader :duration="2000" v-if="showPreloader" />
    <div v-else>
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import Preloader from "~/components/Preloader.vue";

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      showPreloader: true,
      showContent: false,
    };
  },
  mounted() {
    // Simulate the loading process and hide preloader after a delay
    setTimeout(() => {
      this.showPreloader = false;
      this.showContent = true;
    }, 1000); // Match the duration in Preloader
  },
};
</script>

<style>
@import "~/assets/css/animations.css";
</style>
