<template>
  <div class="fixed right-10 top-10">
    <div class="gap-5">
      <button @click="changeTheme" class="scale-[2.2]">⬤</button>
    </div>
  </div>
  <div class="px-6">
    <NuxtLayout> <NuxtPage /></NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

// Global SEO configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#000000' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'apple-touch-icon', href: '/favicon.ico' }
  ]
});

function changeTheme() {
  if (colorMode.preference === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Font settings */
body {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
}
</style>
