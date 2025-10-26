// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: false || 'none',
          cssLayer: false,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.APP_URL,
      toast: process.env.TOAST_LIFECYCLE_MILLISECONDS,
      auth: {
        login: process.env.AUTH_LOGIN,
        register: process.env.AUTH_REGISTER,
        logout: process.env.AUTH_LOGOUT,
      },
      user: {
        list: process.env.USERS_LIST,
        store: process.env.USERS_STORE,
        delete: process.env.USERS_DELETE,
        edit: process.env.USERS_UPDATE,
      },
    },
  },
})
