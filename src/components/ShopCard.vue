<script setup>
import { ref } from 'vue'
import { formatName } from '../stores/helpers.js'

const props = defineProps({
  id: String,
  shop_name: String,
  biography: String,
  shop_theme: String,
  user_id: String
})
</script>

<template>
  <div class="card w-72 h-96 border-2">
    <figure><img src="https://img.freepik.com/vecteurs-libre/vintage-boutique-logo_1057-438.jpg" alt="title"
                 class="max-h-48 pt-4" /></figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ formatName(shop_name) }}</h2>
      <!--      TODO: fix overflow-->
      <div class="overflow-auto">
        <p>Description : {{ biography }}</p>
      </div>
      <div class="card-actions justify-end">
        <RouterLink :to="`/users/${user_id}/${id}`">
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