// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '~~/src/assets/css/main.css',
    configPath: '~~/config/tailwindcss.config.ts',
  },
  
  runtimeConfig: {
      databaseUrl: ''
  }
})