<template>
  <div class="mt-36 text-4xl">
    <p class="text-xl mb-10">
      {{ $t("projectsText") }} ({{ jsonData.length }})
    </p>
    <ul class="flex flex-col gap-7">
      <li v-for="(item, index) in jsonData" :key="index" :item="item">
        <div
          class="flex items-center gap-1.5 text-zinc-600 text-base md:text-lg"
        >
          <p>{{ item.year }}</p>
          <span>•</span>
          <p>{{ item.status }}</p>
        </div>
        <a
          class="hover:underline hover:underline-offset-2 text-5xl"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.projectName }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "@/assets/worksData.json";

export default {
  data() {
    return {
      jsonData: data,
    };
  },
};
</script>
