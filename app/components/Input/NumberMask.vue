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
  <InputMask
    :pt="{
      root: ['w-full rounded h-9', borderRadius, borderColor],
    }"
  />
</template>
