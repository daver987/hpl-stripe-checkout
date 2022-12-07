// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify',
  },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    stripeKey: process.env.STRIPE_SECRET_KEY,
  },
})
