type Response = {
  data: {
    token: string
    user: object
  }
  message: string
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<object>({})

    const isAuth = computed(() =>
      Object.keys(authUser.value).length > 0 ? true : false
    )

    // use interface later to constrain user type
    const updateAuth = (user: Response) => (authUser.value = user)

    const resetAuth = () => (authUser.value = {})

    return {
      authUser,
      updateAuth,
      resetAuth,
      isAuth,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies(),
    },
  }
)
