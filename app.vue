<template>
  <div class="px-6">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
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
