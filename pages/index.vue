<template>
  <div>
    <div class="fixed top-6 right-6">
      <div class="flex flex-col items-center gap-5">
        <button @click="changeTheme" class="scale-[2] w-6">⬤</button>
        <button @click="changeText" class="px-2">Fa</button>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row mt-10">
      <div class="lg:w-1/2 w-full md:fixed">
        <div class="text-6xl md:text-7xl font-bold">
          <div>{{ $t("myName") }}</div>
          <div class="text-xl mt-1">• {{ $t("underNameText") }}</div>
        </div>
      </div>
      <div class="w-2/5 hidden md:block" />
      <div class="lg:w-1/2 w-full mt-36 lg:mt-0 right-0">
        <h1>
          <div class="text-6xl font-bold">
            {{ $t("headerText") }}
          </div>
        </h1>
        <Works />

        <div class="mt-36 hover:underline hover:underline-offset-2">
          <a
            href="https://drive.google.com/file/d/1gXYSqmXzKbejmZ3mpQOW9ePtWSvZ7ZiC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-5xl"
            >{{ $t("resumeText") }}</a
          >
        </div>

        <div class="flex flex-col mt-36">
          <p class="text-xl mb-10">{{ $t("contactText") }}</p>
          <div class="">
            <a
              href="mailto:sinazare.xyz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-5xl hover:underline"
              >Email</a
            >
          </div>
          <div>
            <a
              href="https://t.me/sinazarexyz"
              target="_blank"
              rel="noopener noreferrer"
              class="text-5xl hover:underline"
              >Telegram</a
            >
          </div>
          <div class="">
            <a
              href="https://github.com/sina-sparkn"
              target="_blank"
              rel="noopener noreferrer"
              class="text-5xl hover:underline"
              >Github</a
            >
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sina-zare-a01550238/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-5xl hover:underline"
              >Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="h-28"></div>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();

const colorMode = useColorMode();

function changeTheme(event) {
  if (colorMode.preference === "light") {
    event.target.textContent = "⬤";
    colorMode.preference = "dark";
  } else {
    event.target.textContent = "◗";
    colorMode.preference = "light";
  }
}

function changeText(event) {
  const text = event.target.textContent;
  if (text === "En") {
    event.target.textContent = "Fa";
    setLocale("en");
  } else {
    event.target.textContent = "En";
    setLocale("fa");
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #121212;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
