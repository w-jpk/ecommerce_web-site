// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/assets/styles/_vars.scss' as *;
            @use '~/assets/styles/_mixins.scss' as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/icon", "@pinia/nuxt"],
});
