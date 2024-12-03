<template>
  <div class="preloader" v-if="loading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 2000, // 2 seconds
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, this.duration);
  },
};
</script>

<style>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
