<template>
  <div class="fixed right-10 top-10">
    <div class="gap-5">
      <button @click="changeTheme" class="scale-[2]">⬤</button>
    </div>
  </div>
  <div class="px-6">
    <NuxtLayout> <NuxtPage /></NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

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

body {
  font-family: Satoshi;
  font-weight: 900;
}
</style>
