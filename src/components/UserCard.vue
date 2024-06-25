<script setup>
import { ref } from 'vue'
import { formatName } from '../stores/helpers.js'

const props = defineProps({
  id: String,
  email: String,
  pseudo: String,
  address: String,
  phone_number: String,
  image: String
})
</script>

<template>
  <div class="card w-72 h-96 border-2">
    <figure><img :src="image" alt="userpicture" class="max-w-48 pt-4" /></figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ formatName(pseudo) }}</h2>
      <p>Adresse : {{ address }}</p>
      <div class="card-actions justify-end">
        <RouterLink :to="`/users/${id}`">
          <div class="btn btn-custom-primary btn-ghost">Voir la page de l'artisan</div>
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