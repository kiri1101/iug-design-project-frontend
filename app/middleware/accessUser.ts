export default defineNuxtRouteMiddleware((to, from) => {
  type Role = {
    id: string
    slug: string
    name: string
  }

  const authStore = useCookie('auth', {
    default: () => ({
      authUser: {
        token: '',
        settings: {},
        user: {
          role: [],
        },
      },
    }),
  })

  let authUserRoles = authStore.value.authUser.user.role

  if (
    authUserRoles.filter((role: Role) => ['ceo', 'dhr'].includes(role.slug))
      .length === 0
  ) {
    console.log('cannot progress: ', from.name)
    return navigateTo('/dashboard')
  }
})
