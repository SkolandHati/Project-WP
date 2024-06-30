export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  ssr: false,

  css: ['~/assets/saas/main.scss'],

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/saas/mixin/media_query_mixin/_mixin.scss" as *;'
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
