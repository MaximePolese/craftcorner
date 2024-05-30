<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: Number,
  email: String,
  username: String,
  address: String,
  phone: String
})
</script>

<template>
  <div class="card w-72 h-96 shadow-xl border-2">
    <figure><img
      src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      alt="userpicture" class="h-40 pt-4" /></figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ username }}</h2>
      <p>Email : {{ email }}</p>
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