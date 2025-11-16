<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'master',
})
</script>

<template>
  <div class="p-3 bg-white rounded-lg shadow">
    <NuxtPage />
  </div>
</template>
