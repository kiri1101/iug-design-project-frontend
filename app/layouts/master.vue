<script setup>
const config = useRuntimeConfig()
const authStore = useAuthStore()
const { $apiFetch } = useNuxtApp()
const { navItems } = useNavigation()
const { s } = useNotify()
const isLoading = ref(false)
const authUser = authStore.authUser
const menu = ref()
const expandHeight = ref(false)

onUnmounted(() => authStore.resetAuth())

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
    navigateTo('/')
  }
}
</script>

<template>
  <main class="flex flex-col w-full font-mono antialiased h-dvh">
    <nav
      class="flex flex-row items-center justify-between px-3 py-1 border-b border-gray-300"
      aria-label="Navigation bar"
    >
      <nuxt-link to="/" class="inline-flex">
        <svg-logo width="w-5" height="h-10" />
      </nuxt-link>

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
                <li class="p-2 border-b border-gray-300">
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
    </nav>

    <section class="flex flex-row h-full">
      <span class="block md:hidden">
        <SpeedDial
          :model="navItems"
          direction="down"
          :style="{
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'translate(-3rem, 0.6rem)',
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
              class="flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-sm cursor-pointer transition duration-200 ease-linear"
              @click.prevent="toggleCallback"
            >
              <i class="pi pi-align-left" style="font-size: 0.8rem" />
            </button>
          </template>

          <template #item="{ item, toggleCallback }">
            <button
              type="button"
              v-tooltip="`${item.label}`"
              class="flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-full cursor-pointer transition duration-200 ease-linear shadow"
              @click="toggleCallback"
            >
              <i :class="item.icon" style="font-size: 0.8rem" />
            </button>
          </template>
        </SpeedDial>
      </span>

      <aside
        class="flex-col hidden w-48 p-2 border-r border-gray-300 divide-y divide-gray-300 md:flex"
      >
        <!-- {{ $router.currentRoute.value.name }} -->

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
          <li>
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
          <li
            class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"
          >
            <i class="pi pi-telegram mr-1.5" />
            Leave
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

      <div class="p-2 grow bg-slate-100">
        <slot />
      </div>
    </section>
  </main>
</template>
