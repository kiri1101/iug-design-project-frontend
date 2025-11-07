<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'master',
})

useHead({
  title: `Dashboard - IUGDesign`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})
</script>

<template>
  <h5>Dashboard</h5>
</template>
