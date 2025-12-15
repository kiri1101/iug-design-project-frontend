<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'master',
})

useHead({
  title: `Dashboard - IUGDesign`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  getNotificationList()
  getUserCount()
})

const authStore = useAuthStore()
const notifyStore = useNotificationStore()
const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp()
const userCount = ref(0)

if (import.meta.client) {
  const { $echo } = useNuxtApp()

  $echo
    .channel(`personal.${authStore.authUser.user.id}`)
    .listen('.message.posted', e => {
      notifyStore.updateList(e)
    })
}

const getNotificationList = async () => {
  try {
    const response = await $apiFetch(config.public.notification)
    notifyStore.setList(response.data.notifications)
  } catch ({ status, data }) {
    //
  }
}

const getUserCount = async () => {
  try {
    const response = await $apiFetch(config.public.count.users)
    userCount.value = Number(response.data.count)
  } catch ({ status, data }) {
    //
  }
}
</script>

<template>
  <div class="space-y-3">
    <div class="flex flex-col gap-3 bg-white rounded-lg">
      <ul class="flex flex-wrap lg:flex-nowrap gap-3 p-4">
        <li
          class="bg-emerald-600 basis-1/4 grow text-white p-3 inline-flex flex-col rounded-md justify-between"
        >
          <h5 class="text-sm font-semibold">No of Employees</h5>

          <h2 class="text-2xl text-right">{{ userCount }}</h2>
        </li>
        <li
          class="bg-emerald-600 basis-1/4 grow text-white p-3 inline-flex flex-col rounded-md justify-between"
        >
          <h5 class="text-sm md:text-base font-semibold">Budget</h5>

          <div class="flex space-x-1 items-end justify-end">
            <p class="text-2xl text-right tracking-tighter">74,000,000</p>

            <h5 class="font-semibold">XAF</h5>
          </div>
        </li>
        <li
          class="bg-emerald-600 basis-1/4 grow text-white p-3 inline-flex flex-col rounded-md justify-between"
        >
          <div class="flex justify-between items-center">
            <h5 class="text-sm md:text-base font-semibold">Expenditure</h5>

            <img
              src="/assets/svg/graphdown.svg"
              class="size-5 bg-white rounded object-cover object-center mb-2"
            />
          </div>

          <div class="flex space-x-1 items-end justify-end">
            <p class="text-2xl text-right tracking-tighter">7,400,000</p>

            <h5 class="font-semibold">XAF</h5>
          </div>
        </li>
        <li
          class="bg-emerald-600 basis-1/4 grow text-white p-3 inline-flex flex-col rounded-md justify-between"
        >
          <div class="flex justify-between items-center">
            <h5 class="text-sm md:text-base font-semibold">Profit margin</h5>

            <img
              src="/assets/svg/graphup.svg"
              class="size-5 bg-white rounded object-cover object-center mb-2"
            />
          </div>

          <div class="flex space-x-1 items-end justify-end">
            <p class="text-2xl text-right tracking-tighter">67,600,000</p>

            <h5 class="font-semibold">XAF</h5>
          </div>
        </li>
      </ul>

      <div class="grid sm:grid-cols-2">
        <div class="grid mx-auto">
          <chart-nightingale-pie />
        </div>

        <div class="grid mx-auto">
          <chart-nightingale-pie />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg">
      <h5 class="py-2 px-4 text-sm">Classification of leaves</h5>

      <div class="w-[calc(100dvw-14rem)] overflow-auto">
        <chart-line />
      </div>
    </div>
  </div>
</template>
