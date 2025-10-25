import { defineNuxtPlugin } from '#app'

type AuthResponse = {
  user: string
  token: string
  settings: object
}

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  nuxtApp.provide(
    'apiFetch',
    $fetch.create({
      baseURL: config.public.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      onRequest({ options }) {
        options.headers.append(
          'Authorization',
          `Bearer ${(authStore.authUser as AuthResponse)?.token}`
        )
      },
      onResponseError: ({ response }) => {
        switch (Number(response.status)) {
          case 401:
            authStore.resetAuth()
            navigateTo('/')
            break

          default:
            break
        }
      },
    })
  )
})
