<script setup>
defineProps({
  borderRadius: {
    type: String,
    default: 'rounded',
  },
  borderColor: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <InputNumber
    :pt="{
      root: 'w-full rounded h-9',
    }"
    :input-class="['w-full rounded h-9', borderRadius, borderColor]"
  />
</template>
