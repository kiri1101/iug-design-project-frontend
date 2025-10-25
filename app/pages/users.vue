<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'master',
})
</script>

<template>
  <div class="h-full p-3 bg-white rounded-lg shadow">
    <NuxtPage :foobar="123" />
  </div>
</template>
