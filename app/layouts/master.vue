<script setup>
const config = useRuntimeConfig()
const authStore = useAuthStore()
const notifyStore = useNotificationStore()
const { $apiFetch } = useNuxtApp()
const { navItems } = useNavigation()
const { s } = useNotify()
const isLoading = ref(false)
const authUser = authStore.authUser
const menu = ref()
const expandHeight = ref(false)
const showNotifyPanel = ref(false)

onUnmounted(() => {
  authStore.resetAuth()
})

const canShowUser = computed(() => {
  let output
  if (authStore.isAuth) {
    let authUserRoles = authStore.authUser.user.role
    output =
      authUserRoles.find(role => role.slug === 'ceo') !== undefined ||
      authUserRoles.find(role => role.slug === 'dhr') !== undefined
        ? true
        : false
  } else {
    output = false
  }
  return output
})

const showingNotifyPanel = () => (showNotifyPanel.value = true)

const toggleMenu = event => menu.value.toggle(event)

const expandingHeight = () => (expandHeight.value = true)

const reducingHeight = () => (expandHeight.value = false)

const logout = async () => {
  isLoading.value = true
  try {
    const response = await $apiFetch(config.public.auth.logout, {
      method: 'POST',
    })

    console.log('logout response: ', response)
    s(response.message)
  } catch ({ status, data }) {
    console.log('error code during logout: ', data)
  } finally {
    isLoading.value = false
    authStore.resetAuth()
    return navigateTo('/')
  }
}
</script>

<template>
  <main class="flex flex-col w-full font-mono antialiased h-dvh bg-white">
    <nav
      class="flex flex-row items-center justify-between px-3 py-1 border-b border-gray-300"
      aria-label="Navigation bar"
    >
      <nuxt-link to="/" class="inline-flex">
        <svg-logo width="w-5" height="h-10" />
      </nuxt-link>

      <div class="flex flex-row items-center space-x-2">
        <div
          class="relative cursor-pointer hover:scale-110 transition duration-200 ease-linear"
          @click.prevent="showingNotifyPanel"
        >
          <i class="pi pi-bell" />

          <span class="absolute top-0 right-0 flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
            />
            <span
              class="relative inline-flex size-2 rounded-full bg-orange-500"
            />
          </span>
        </div>

        <ul>
          <li class="text-sm">
            <img
              src="https://picsum.photos/id/237/200/300"
              class="object-cover object-center rounded-full cursor-pointer size-7"
              @click.prevent="toggleMenu"
              alt="Profile picture"
            />

            <Popover ref="menu">
              <div class="w-52">
                <ul class="space-y-1">
                  <li class="p-2 border-b border-gray-300 capitalize">
                    <i class="mr-1 pi pi-user" />
                    {{ authUser?.user.fullName }}
                  </li>
                  <li
                    class="flex items-center justify-between p-2 text-gray-900 transition duration-150 ease-linear rounded cursor-pointer hover:bg-emerald-400 hover:text-gray-100"
                    @click.prevent="logout"
                  >
                    <span>
                      <i class="mr-1 pi pi-sign-out" />
                      Logout
                    </span>

                    <i
                      v-if="isLoading"
                      class="pi pi-spinner animate-spin"
                      style="font-size: 0.9rem"
                    />
                  </li>
                </ul>
              </div>
            </Popover>
          </li>
        </ul>
      </div>
    </nav>

    <Drawer v-model:visible="showNotifyPanel" header="Drawer">
      <template #container="{ closeCallback }">
        <div class="font-mono space-y-5">
          <div
            class="flex flex-row justify-between items-center border-b border-gray-300 p-3"
          >
            <h2 class="text-2xl font-bold">Notifications</h2>

            <i
              class="pi pi-times cursor-pointer hover:bg-gray-900 hover:text-white p-1 rounded transition duration-200 ease-linear"
              style="font-size: 0.8rem"
              @click.prevent="closeCallback"
            />
          </div>

          <div class="p-3 h-[calc(100dvh-5.5rem)] overflow-y-auto">
            <ul class="space-y-3">
              <li
                v-for="message in notifyStore.list"
                :key="message.id"
                class="text-xs bg-gray-700 text-gray-100 p-2 rounded"
              >
                {{ message.content }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Drawer>

    <section class="flex flex-row h-full">
      <span class="block md:hidden">
        <SpeedDial
          :model="navItems"
          direction="down"
          :style="{
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'translate(-4.5rem, 0.7rem)',
            'z-index': 50,
          }"
          :buttonProps="{ severity: 'contrast', rounded: true }"
          :pt="{
            root: ['', { 'h-auto': expandHeight }, { 'h-8': !expandHeight }],
          }"
          @click.prevent="expandingHeight"
          @hide="reducingHeight"
        >
          <template #button="{ toggleCallback }">
            <button
              type="button"
              class="flex items-center justify-center py-[0.4rem] px-[0.5rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-sm cursor-pointer transition duration-200 ease-linear"
              @click.prevent="toggleCallback"
            >
              <i class="pi pi-align-left" style="font-size: 0.8rem" />
            </button>
          </template>

          <template #item="{ item, toggleCallback }">
            <div class="relative">
              <button
                type="button"
                v-tooltip="`${item.label}`"
                class="flex items-center justify-center p-[0.45rem] bg-white text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-full cursor-pointer transition duration-200 ease-linear shadow"
                @click="toggleCallback"
              >
                <i :class="item.icon" style="font-size: 0.8rem" />
              </button>

              <span
                class="absolute top-1.5 right-8 bg-white border border-gray-500 rounded-xs px-1 text-xs shadow"
              >
                {{ item.label }}
              </span>
            </div>
          </template>
        </SpeedDial>
      </span>

      <aside
        class="flex-col hidden w-48 p-2 border-r border-gray-300 divide-y divide-gray-300 md:flex"
      >
        <ul class="mt-5 space-y-2 grow">
          <li>
            <nuxt-link
              to="/dashboard"
              :class="[
                'flex items-center cursor-pointer px-2 py-1.5 rounded text-base',
                {
                  'bg-emerald-500 text-white':
                    $router.currentRoute.value.name === 'dashboard',
                },
                {
                  'hover:bg-emerald-500 hover:text-gray-100':
                    $router.currentRoute.value.name !== 'dashboard',
                },
              ]"
            >
              <i class="mr-1.5 pi pi-chart-line" />
              Dashboard
            </nuxt-link>
          </li>
          <li v-if="canShowUser">
            <nuxt-link
              to="/users/list"
              :class="[
                'flex items-center cursor-pointer px-2 text-base py-1.5 rounded ',
                {
                  'bg-emerald-500 text-white':
                    $router.currentRoute.value.name === 'users-list',
                },
                {
                  'hover:bg-emerald-500 hover:text-gray-100':
                    $router.currentRoute.value.name !== 'users-list',
                },
              ]"
            >
              <i class="pi pi-users mr-1.5" />
              Users
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/leaves/list"
              :class="[
                'flex items-center cursor-pointer px-2 text-base py-1.5 rounded ',
                {
                  'bg-emerald-500 text-white':
                    $router.currentRoute.value.name === 'leaves-list',
                },
                {
                  'hover:bg-emerald-500 hover:text-gray-100':
                    $router.currentRoute.value.name !== 'leaves-list',
                },
              ]"
            >
              <i class="pi pi-telegram mr-1.5" />
              Leave
            </nuxt-link>
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-ban mr-1.5" />
            Sanction
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-graduation-cap mr-1.5" />
            Internship
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-receipt mr-1.5" />
            Bill
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-warehouse mr-1.5" />
            Warehouse
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-briefcase mr-1.5" />
            Job
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-save mr-1.5" />
            Reservation
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-box mr-1.5" />
            Delivery
          </li>
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-chart-line mr-1.5" />
            Career
          </li>
        </ul>

        <h1 class="mt-3 text-sm text-gray-500">v1.0.9.5</h1>
      </aside>

      <div
        class="p-2 grow bg-slate-100 h-[calc(100dvh-3.05rem)] overflow-y-auto"
      >
        <slot />
      </div>
    </section>
  </main>
</template>
