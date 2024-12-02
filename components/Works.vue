<template>
  <div class="mt-36 text-4xl">
    <p class="text-xl mb-10">
      {{ $t("projectsText") }} ({{ jsonData.length }})
    </p>
    <ul class="space-y-1">
      <li
        class="hover:underline hover:underline-offset-2 text-5xl"
        v-for="(item, index) in jsonData"
        :key="index"
        :item="item"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
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
