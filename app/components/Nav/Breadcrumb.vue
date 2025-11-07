<template>
  <Breadcrumb
    :pt="{
      root: 'text-base',
    }"
  >
    <template #separator>
      <i class="pi pi-chevron-right" style="font-size: 0.7rem" />
    </template>
  </Breadcrumb>
</template>

<style scoped>
.p-breadcrumb {
  padding: 0;
}
</style>
