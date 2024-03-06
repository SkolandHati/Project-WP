export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  css: ['~/assets/saas/main.scss'],

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/saas/mixin/_mixin.scss" as *;'
        }
      }
    }
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

  modules: [
    '@pinia/nuxt',
  ],

})
