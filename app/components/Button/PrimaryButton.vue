<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Button
    :label="label"
    :pt="{
      root: 'w-full',
    }"
  />
</template>
