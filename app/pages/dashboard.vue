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
})

const authStore = useAuthStore()
const notifyStore = useNotificationStore()
const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp()

if (import.meta.client) {
  const { $echo } = useNuxtApp()

  $echo
    .channel(`personal.${authStore.authUser.user.id}`)
    .listen('.message.posted', e => {
      console.log('public channel message: ', e)
      notifyStore.updateList(e)
    })
}

const getNotificationList = async () => {
  try {
    const response = await $apiFetch(config.public.notification)
    console.log('notification list: ', response)
    notifyStore.setList(response.data.notifications)
  } catch ({ status, data }) {
    console.log('get notification list: ', data)
  }
}
</script>

<template>
  <div class="space-y-3">
    <div class="flex flex-wrap gap-3 bg-white rounded-lg">
      <ul class="grid grid-cols-2 gap-3 p-4 grow w-80">
        <li
          class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"
        >
          <h5 class="text-sm font-semibold">No of Users</h5>

          <h5 class="text-5xl text-right">300</h5>
        </li>
        <li
          class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"
        >
          <h5 class="text-sm font-semibold">No of Leaves</h5>

          <div class="flex flex-row items-end justify-between">
            <img
              src="/assets/svg/graphdown.svg"
              class="size-5 bg-white rounded object-cover object-center mb-2"
            />

            <h5 class="text-5xl text-right">300</h5>
          </div>
        </li>
        <li
          class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"
        >
          <h5 class="text-sm font-semibold">No of Users</h5>

          <div class="flex flex-row items-end justify-between">
            <img
              src="/assets/svg/graphup.svg"
              class="size-5 bg-white rounded object-cover object-center mb-2"
            />

            <h5 class="text-5xl text-right">300</h5>
          </div>
        </li>
        <li
          class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"
        >
          <h5 class="text-sm font-semibold">No of Users</h5>

          <h2 class="text-5xl text-right">300</h2>
        </li>
      </ul>

      <div class="flex justify-center">
        <chart-nightingale-pie />
      </div>

      <div class="flex justify-center">
        <chart-nightingale-pie />
      </div>
    </div>

    <div class="bg-white rounded-lg">
      <h5 class="py-2 px-4 text-sm">Classification of leaves</h5>

      <!-- <chart-line /> -->
    </div>
  </div>
</template>
