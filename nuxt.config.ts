// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/color-mode", "@nuxt/fonts", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
