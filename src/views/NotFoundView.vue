<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

const route = useRoute()
const store = useAppStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

</script>

<template>
  <div class="flex justify-center items-center h-96">
    <h1>Page not found</h1>
  </div>
</template>

<style scoped>

</style>