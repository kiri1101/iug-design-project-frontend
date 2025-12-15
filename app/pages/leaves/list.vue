<script setup>
import moment from 'moment'

useHead({
  title: `Leaves - IUGDesign`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => getLeaves())

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp()
const { s, e, w } = useNotify()
const authStore = useAuthStore()
const isLoading = ref(false)
const leaveList = ref({
  department: [],
  personal: [],
})
const createLeave = ref(false)
const isUpdatingLeave = ref(false)
const minDate = new Date()
const chosenLeave = ref({})
const reject = ref()
const form = ref({
  type: '',
  description: '',
  departureDate: '',
  returnDate: '',
})
const home = ref({
  icon: 'pi pi-home',
})
const items = ref([{ label: 'Leaves' }])
const returnDateInputMinVal = ref(new Date())

const modalTitle = computed(() =>
  isUpdatingLeave.value ? 'Edit leave request' : 'Request for leave'
)

const showDepartmentLeaves = computed(() => {
  let output
  if (authStore.isAuth) {
    output = authStore.authUser.user.role[0].slug !== 'emp' ? true : false
  } else {
    output = false
  }
  return output
})

const canGrantLeave = computed(
  () =>
    authStore.authUser.user.role.filter(
      role => role?.slug === 'dhr' || role?.slug === 'ceo'
    ).length > 0
)

const toggleReject = event => reject.value.toggle(event)

const setReturnDateInputMinVal = () =>
  (returnDateInputMinVal.value =
    typeof form.value.departureDate === 'string' &&
    form.value.departureDate.trim().length === 0
      ? new Date()
      : moment(form.value.departureDate).toDate())

const resetForm = () => {
  form.value = {
    type: '',
    description: '',
    departureDate: '',
    returnDate: '',
  }
}

const openingCreateLeaveModal = () => (createLeave.value = true)

const closingCreateLeaveModal = () => {
  createLeave.value = false
  resetForm()
}

const changeLeaveModalTitle = () => (isUpdatingLeave.value = true)

const resetLeaveModalTitle = () => {
  chosenLeave.value = {}
  isUpdatingLeave.value = false
}

const getLeaves = async () => {
  isLoading.value = true
  try {
    const response = await $apiFetch(config.public.leave.list)

    leaveList.value = response.data.leaves
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

const submit = async () => {
  let link = isUpdatingLeave.value
    ? config.public.leave.edit.replace(':leave', chosenLeave.value.id)
    : config.public.leave.store

  isLoading.value = true
  try {
    const response = await $apiFetch(link, {
      method: 'POST',
      body: {
        type: form.value.type,
        description: form.value.description,
        departureDate: moment(form.value.departureDate).format(),
        returnDate: moment(form.value.returnDate).format(),
      },
    })

    s(response.message)
    closingCreateLeaveModal()
    if (isUpdatingLeave.value) {
      resetLeaveModalTitle()
    }
    getLeaves()
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

const deleteLeave = async leaveId => {
  isLoading.value = true
  try {
    const response = await $apiFetch(
      config.public.leave.delete.replace(':leave', leaveId),
      {
        method: 'POST',
      }
    )

    s(response.message)
    getLeaves()
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

const updateStatus = async (status, leaveId) => {
  isLoading.value = true
  try {
    const response = await $apiFetch(
      config.public.leave.status.update.replace(':leave', leaveId),
      {
        method: 'POST',
        body: {
          action: status,
        },
      }
    )

    s(response.message)
    getLeaves()
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

const editLeave = leave => {
  form.value.type = leave.type
  form.value.description = leave.description
  form.value.departureDate = moment(leave.departureDate).toDate()
  form.value.returnDate = moment(leave.returnDate).toDate()

  chosenLeave.value = leave
  changeLeaveModalTitle()
  openingCreateLeaveModal()
}
</script>

<template>
  <section aria-label="List of user leaves" class="space-y-7">
    <div class="space-y-2">
      <div
        class="flex items-center justify-between pb-3 border-b border-gray-200"
      >
        <span>
          <i
            v-show="isLoading"
            class="text-emerald-500 pi pi-spinner animate-spin"
            style="font-size: 1.2rem"
          />
        </span>

        <button-outline-button
          @click.prevent="openingCreateLeaveModal"
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
        <h1 class="text-xl font-semibold text-gray-500">Leaves list</h1>

        <nav-breadcrumb :home="home" :model="items" />
      </div>
    </div>

    <Tabs value="0">
      <TabList>
        <Tab value="0">My Leaves</Tab>
        <Tab v-if="showDepartmentLeaves" value="1">Department Leaves</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <DataTable
            :value="leaveList.personal"
            paginator
            :rows="10"
            :rowsPerPageOptions="[20, 30, 40, 50]"
            scrollable
            :loading="isLoading"
            scrollHeight="400px"
            :virtualScrollerOptions="{
              itemSize: 44,
            }"
            tableStyle="min-width: 50rem"
          >
            <Column
              field="type.name"
              header="Type"
              style="width: 20%; font-size: 0.9rem"
            ></Column>
            <Column
              field="description"
              header="Reason for leave"
              style="width: 30%; font-size: 0.9rem"
            ></Column>
            <Column
              field="departureDate"
              header="Depart date"
              style="width: 15%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                {{
                  moment
                    .parseZone(slotProps.data.departureDate)
                    .format('DD/M/yy')
                }}
              </template>
            </Column>
            <Column
              field="returnDate"
              header="Return date"
              style="width: 15%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                {{
                  moment.parseZone(slotProps.data.returnDate).format('DD/M/yy')
                }}
              </template>
            </Column>
            <Column
              field="status"
              header="Status"
              style="width: 10%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                <p
                  :class="[
                    'py-1 px-3 text-xs ex text-center text-white rounded-sm',
                    {
                      'bg-orange-400': slotProps.data.status.color === 'orange',
                    },
                    { 'bg-sky-400': slotProps.data.status.color === 'sky' },
                    { 'bg-blue-400': slotProps.data.status.color === 'blue' },
                    {
                      'bg-emerald-400': slotProps.data.status.color === 'green',
                    },
                    {
                      'bg-amber-400': slotProps.data.status.color === 'yellow',
                    },
                    {
                      'bg-violet-400': slotProps.data.status.color === 'violet',
                    },
                    { 'bg-red-400': slotProps.data.status.color === 'red' },
                    {
                      'bg-fuchsia-400':
                        slotProps.data.status.color === 'fuchsia',
                    },
                  ]"
                >
                  {{ slotProps.data.status.label }}
                </p>
              </template>
            </Column>
            <Column header="Actions" style="width: 10%; font-size: 0.9rem">
              <template #body="slotProps">
                <span class="space-x-1.5">
                  <div
                    class="relative inline-flex items-center justify-center gap-1.5"
                    v-if="slotProps.data.status.level === 1"
                  >
                    <i
                      @click.prevent="
                        updateStatus(
                          slotProps.data.status.level,
                          slotProps.data.id
                        )
                      "
                      class="pi pi-send cursor-pointer hover:text-blue-500 z-50"
                      v-tooltip.top="'Send'"
                    />

                    <i
                      @click.prevent="editLeave(slotProps.data)"
                      v-tooltip.top="'Edit'"
                      class="cursor-pointer pi pi-pen-to-square hover:text-emerald-500"
                    />

                    <i
                      @click.prevent="deleteLeave(slotProps.data.id)"
                      v-tooltip.top="'Delete'"
                      class="z-50 cursor-pointer pi pi-trash hover:text-red-500"
                    />
                  </div>
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
        </TabPanel>
        <TabPanel v-if="showDepartmentLeaves" value="1">
          <DataTable
            :value="leaveList.department"
            paginator
            :rows="10"
            :rowsPerPageOptions="[20, 30, 40, 50]"
            scrollable
            :loading="isLoading"
            scrollHeight="400px"
            :virtualScrollerOptions="{
              itemSize: 44,
            }"
            tableStyle="min-width: 50rem"
          >
            <Column
              field="fullName"
              header="Name"
              style="width: 20%; font-size: 0.9rem"
            ></Column>
            <Column
              field="type.name"
              header="Type"
              style="width: 10%; font-size: 0.9rem"
            ></Column>
            <Column
              field="description"
              header="Reason for leave"
              style="width: 30%; font-size: 0.9rem"
            ></Column>
            <Column
              field="departureDate"
              header="Departure date"
              style="width: 10%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                {{
                  moment
                    .parseZone(slotProps.data.departureDate)
                    .format('DD/M/yy')
                }}
              </template>
            </Column>
            <Column
              field="returnDate"
              header="Return date"
              style="width: 10%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                {{
                  moment.parseZone(slotProps.data.returnDate).format('DD/M/yy')
                }}
              </template>
            </Column>
            <Column
              field="status"
              header="Status"
              style="width: 10%; font-size: 0.9rem"
            >
              <template #body="slotProps">
                <p
                  :class="[
                    'py-1 px-3 text-xs text-center text-white rounded-sm',
                    {
                      'bg-orange-400': slotProps.data.status.color === 'orange',
                    },
                    { 'bg-sky-400': slotProps.data.status.color === 'sky' },
                    { 'bg-blue-400': slotProps.data.status.color === 'blue' },
                    {
                      'bg-emerald-400': slotProps.data.status.color === 'green',
                    },
                    {
                      'bg-amber-400': slotProps.data.status.color === 'yellow',
                    },
                    {
                      'bg-violet-400': slotProps.data.status.color === 'violet',
                    },
                    { 'bg-red-400': slotProps.data.status.color === 'red' },
                    {
                      'bg-fuchsia-400':
                        slotProps.data.status.color === 'fuchsia',
                    },
                  ]"
                >
                  {{ slotProps.data.status.label }}
                </p>
              </template>
            </Column>
            <Column header="Actions" style="width: 10%; font-size: 0.9rem">
              <template #body="slotProps">
                <span class="space-x-1.5">
                  <div
                    class="relative inline-flex items-center justify-center gap-1.5"
                  >
                    <template v-if="slotProps.data.status.level === 1">
                      <i
                        @click.prevent="
                          updateStatus(
                            slotProps.data.status.level,
                            slotProps.data.id
                          )
                        "
                        class="pi pi-send cursor-pointer hover:text-blue-500 z-50"
                        v-tooltip.top="'Send'"
                      />
                    </template>

                    <template v-if="slotProps.data.status.level === 2">
                      <i
                        @click.prevent="
                          updateStatus(
                            slotProps.data.status.level,
                            slotProps.data.id
                          )
                        "
                        class="pi pi-check-square cursor-pointer hover:text-blue-500 z-50"
                        v-tooltip.top="'Approve'"
                      />

                      <i
                        class="pi pi-ban cursor-pointer hover:text-red-500 z-50"
                        v-tooltip.top="'Reject'"
                        @click.prevent="toggleReject"
                      />
                    </template>

                    <template
                      v-if="slotProps.data.status.level === 3 && canGrantLeave"
                    >
                      <i
                        @click.prevent="
                          updateStatus(
                            slotProps.data.status.level,
                            slotProps.data.id
                          )
                        "
                        class="pi pi-check-square cursor-pointer hover:text-blue-500 z-50"
                        v-tooltip.top="'Approve'"
                      />

                      <i
                        class="pi pi-ban cursor-pointer hover:text-red-500 z-50"
                        v-tooltip.top="'Reject'"
                        @click.prevent="toggleReject"
                      />
                    </template>

                    <Popover ref="reject">
                      <form
                        @submit.prevent="updateStatus(6, slotProps.data.id)"
                        class="w-64 space-y-5"
                      >
                        <h5 class="text-sm">
                          Are you sure you want reject this leave?
                        </h5>

                        <div class="flex flex-row justify-between">
                          <Button
                            type="submit"
                            label="Submit"
                            iconPos="right"
                            :loading="isLoading"
                            :pt="{
                              root: 'h-7',
                              label: 'text-xs',
                            }"
                          />

                          <Button
                            label="Cancel"
                            iconPos="right"
                            variant="outlined"
                            severity="contrast"
                            :pt="{
                              root: 'h-7',
                              label: 'text-xs',
                            }"
                            @click.prevent="toggleReject"
                          />
                        </div>
                      </form>
                    </Popover>
                  </div>

                  <template v-if="slotProps.data.status.level === 1">
                    <i
                      @click.prevent="editLeave(slotProps.data)"
                      v-tooltip.top="'Edit'"
                      class="cursor-pointer pi pi-pen-to-square hover:text-emerald-500"
                    />

                    <div
                      class="relative inline-flex items-center justify-center"
                    >
                      <i
                        @click.prevent="deleteLeave(slotProps.data.id)"
                        v-tooltip.top="'Delete'"
                        class="z-50 cursor-pointer pi pi-trash hover:text-red-500"
                      />
                    </div>
                  </template>
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
        </TabPanel>
      </TabPanels>
    </Tabs>

    <Dialog v-model:visible="createLeave" modal :header="modalTitle">
      <form @submit.prevent="submit" class="px-3 mt-7 space-y-3 xs:w-96">
        <FloatLabel variant="on">
          <input-select
            v-model="form.type"
            :options="authStore.authUser.settings.leaveTypes"
            optionLabel="name"
            labelId="types"
          />

          <label for="position"> Type of leave </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-text-area
            id="description"
            v-model="form.description"
            autocomplete="off"
          />

          <label for="firstName"> Reason </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-date-picker
            v-model="form.departureDate"
            inputId="departureDate"
            dateFormat="dd/mm/yy"
            :minDate="minDate"
            @update:modelValue="setReturnDateInputMinVal"
          />

          <label for="departureDate"> Date of departure </label>
        </FloatLabel>

        <FloatLabel variant="on">
          <input-date-picker
            v-model="form.returnDate"
            inputId="returnDate"
            dateFormat="dd/mm/yy"
            :minDate="returnDateInputMinVal"
          />

          <label for="returnDate"> Date of return </label>
        </FloatLabel>

        <button-primary-button
          type="submit"
          label="Submit"
          iconPos="right"
          :loading="isLoading"
        />
      </form>
    </Dialog>
  </section>
</template>
