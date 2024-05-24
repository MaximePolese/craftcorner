<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore'

const store = useAppStore()

onMounted(() => {
  const route = useRoute()
  document.title = `${route.name} - ${store.appName}`
})
</script>

<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil de notre site.</p>
  </div>
</template>