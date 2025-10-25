<script setup>
defineProps({
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Button
    variant="outlined"
    :class="[
      'text-xs transition duration-300 ease-linear shadow hover:shadow-gray-900 h-7',
      customClass,
    ]"
    :pt="{
      icon: 'text-xs',
    }"
  />
</template>

<style scoped>
.p-button-outlined:not(:disabled):hover {
  background: #000;
  border-color: #000;
  color: #fff;
}

.p-button-outlined {
  background: transparent;
  border-color: #000;
  color: #000;
}
</style>
