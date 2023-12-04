// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  devtools: { enabled: true },
  // css: ['~/assets/styles.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles.scss"; @import "@/assets/variables.scss"; @import "@/assets/mixins.scss"; @import "@/assets/fonts.scss";'
        }
      }
    }
  },
  // ssr: false
})
