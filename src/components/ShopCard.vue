<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  shopname: String,
  biography: String,
  theme: String,
  userid: String,
})
</script>

<template>
  <div class="card w-72 h-96 border-2">
    <figure><img src="https://img.freepik.com/vecteurs-libre/vintage-boutique-logo_1057-438.jpg" alt="title" class="h-40 pt-4" /></figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ shopname }}</h2>
      <p>Description : {{ biography }}</p>
      <div class="card-actions justify-end">
        <RouterLink :to="`/users/${userid}/${id}`">
        <button class="btn btn-custom-primary btn-ghost">Voir la boutique</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-color: var(--vt-c-platinum);
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
}
</style>