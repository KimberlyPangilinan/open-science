// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
 
export default defineNuxtConfig({
    // devtools: { enabled: true }
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-vue3-google-signin'
    ],
    googleSignIn: {
        clientId: '601747888606-j7ua1r4ocupf4utsjcmr7sbavap161em.apps.googleusercontent.com',
      }
})

