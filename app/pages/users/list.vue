<script setup>
useHead({
  title: `Users - IUGDesign`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => getUsers())

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp()
const { s, e, w } = useNotify()
const authStore = useAuthStore()
const isLoading = ref(false)
const isTableLoading = ref(false)
const isDeleteLoading = ref(false)
const userList = ref([])
const createUser = ref(false)
const isUpdatingUser = ref(false)
const chosenUser = ref({})
const form = ref({
  firstName: '',
  lastName: '',
  mailingAddress: '',
  phoneNumber: '',
  position: '',
  department: '',
})
const home = ref({
  icon: 'pi pi-home',
})
const items = ref([{ label: 'Users' }])

const modalTitle = computed(() =>
  isUpdatingUser.value ? 'Edit user' : 'Create new user'
)

const resetForm = () => {
  form.value = {
    firstName: '',
    lastName: '',
    mailingAddress: '',
    phoneNumber: '',
    position: '',
    department: '',
  }
}

const openingCreateUserModal = () => (createUser.value = true)

const closingCreateUserModal = () => {
  createUser.value = false
  resetForm()
}

const changeUserModalTitle = () => (isUpdatingUser.value = true)

const resetUserModalTitle = () => {
  chosenUser.value = {}
  isUpdatingUser.value = false
}

const getUsers = async () => {
  isTableLoading.value = true
  try {
    const response = await $apiFetch(config.public.user.list)

    userList.value = response.data.users
  } catch ({ status, data }) {
    switch (status) {
      case 422:
        Object.values(data.errors).map(err => e(err[0]))
        break

      default:
        w(data.message)
        break
    }
  } finally {
    isTableLoading.value = false
  }
}

const submit = async () => {
  let link = isUpdatingUser.value
    ? config.public.user.edit.replace(':user', chosenUser.value.id)
    : config.public.user.store

  isLoading.value = true
  try {
    const response = await $apiFetch(link, {
      method: 'POST',
      body: form.value,
    })

    s(response.message)
    closingCreateUserModal()
    if (isUpdatingUser.value) {
      resetUserModalTitle()
    }
    getUsers()
  } catch ({ status, data }) {
    switch (status) {
      case 422:
        Object.values(data.errors).map(err => e(err[0]))
        break

      default:
        w(data.message)
        break
    }
  } finally {
    isLoading.value = false
  }
}

const deleteUser = async userId => {
  isDeleteLoading.value = true
  try {
    const response = await $apiFetch(
      config.public.user.delete.replace(':user', userId),
      {
        method: 'POST',
      }
    )

    s(response.message)
    getUsers()
  } catch ({ status, data }) {
    switch (status) {
      case 422:
        Object.values(data.errors).map(err => e(err[0]))
        break

      default:
        w(data.message)
        break
    }
  } finally {
    isDeleteLoading.value = false
  }
}

const editUser = user => {
  form.value.firstName = user.firstName
  form.value.lastName = user.lastName
  form.value.mailingAddress = user.mailingAddress
  form.value.phoneNumber = user.phoneNumber
  form.value.position = user.role[0]
  form.value.department = user.department

  chosenUser.value = user
  changeUserModalTitle()
  openingCreateUserModal()
}
</script>

<template>
  <section aria-label="List of user accounts" class="space-y-7">
    <div class="space-y-2">
      <div
        class="flex items-center justify-between pb-3 border-b border-gray-200"
      >
        <span>
          <i
            v-show="isDeleteLoading"
            class="text-emerald-500 pi pi-spinner animate-spin"
            style="font-size: 1.2rem"
          />
        </span>

        <button-outline-button
          @click.prevent="openingCreateUserModal"
          label="Create"
          icon="pi pi-plus"
          :pt="{
            icon: {
              style: 'font-size: 0.7rem',
            },
          }"
        />
      </div>

      <div class="space-y-1">
        <h1 class="text-xl font-semibold text-gray-500">Users list</h1>

        <nav-breadcrumb :home="home" :model="items" />
      </div>
    </div>

    <DataTable
      :value="userList"
      paginator
      :rows="10"
      :rowsPerPageOptions="[20, 30, 40, 50]"
      scrollable
      :loading="isTableLoading"
      scrollHeight="400px"
      :virtualScrollerOptions="{
        itemSize: 44,
      }"
      tableStyle="min-width: 50rem"
    >
      <Column field="fullName" header="Name" style="width: 30%"></Column>
      <Column field="mailingAddress" header="Email" style="width: 15%"></Column>
      <Column
        field="phoneNumber"
        header="Phone Number"
        style="width: 15%"
      ></Column>
      <Column field="position" header="Position" style="width: 15%"></Column>
      <Column
        field="department.name"
        header="Department"
        style="width: 15%"
      ></Column>
      <Column header="Actions" style="width: 10%">
        <template #body="slotProps">
          <span class="space-x-1.5">
            <i
              @click.prevent="editUser(slotProps.data)"
              v-tooltip="'Edit'"
              class="cursor-pointer pi pi-pen-to-square hover:text-emerald-500"
            />

            <i
              @click.prevent="deleteUser(slotProps.data.id)"
              v-tooltip="'Delete'"
              class="z-50 cursor-pointer pi pi-trash hover:text-red-500"
            />
          </span>
        </template>
      </Column>

      <template #empty>
        <div class="flex justify-center py-5">
          <span>
            <img
              src="/assets/svg/nodata.svg"
              class="object-center object-cover w-24"
            />

            <h5 class="text-sm text-center">No data</h5>
          </span>
        </div>
      </template>
    </DataTable>

    <Dialog
      v-model:visible="createUser"
      maximizable
      modal
      :header="modalTitle"
      @hide="closingCreateUserModal"
    >
      <form @submit.prevent="submit" class="px-3 mt-7 space-y-7 xs:w-96">
        <FloatLabel variant="on">
          <input-text-input
            id="firstName"
            v-model="form.firstName"
            autocomplete="off"
          />

          <label for="firstName"> First Name </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-text-input
            id="lastName"
            v-model="form.lastName"
            autocomplete="off"
          />

          <label for="lastName"> Last Name </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-text-input
            id="mailingAddress"
            v-model="form.mailingAddress"
            type="email"
            autocomplete="off"
          />

          <label for="mailingAddress"> Email Address </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-number-mask
            id="phoneNumber"
            v-model="form.phoneNumber"
            mask="9-99-99-99-99"
          />

          <label for="phoneNumber"> Phone Number </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-select
            v-model="form.position"
            :options="authStore.authUser.settings.roles"
            optionLabel="name"
            labelId="position"
          />

          <label for="position"> Function </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-select
            v-model="form.department"
            :options="authStore.authUser.settings.departments"
            optionLabel="name"
            labelId="department"
          />

          <label for="department"> Department </label>
        </FloatLabel>

        <button-primary-button
          type="submit"
          label="Create"
          iconPos="right"
          :loading="isLoading"
        />
      </form>
    </Dialog>
  </section>
</template>
