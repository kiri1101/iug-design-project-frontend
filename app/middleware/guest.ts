export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useCookie('auth', {
    default: () => ({ authUser: {} }),
  })

  let keyList = ['token', 'user', 'settings']

  if (
    keyList.every(key => Object.keys(authStore.value.authUser).includes(key))
  ) {
    return navigateTo('/dashboard')
  }
})
