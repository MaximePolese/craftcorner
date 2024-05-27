<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  artisan: String,
  price: Number,
  imageUrl: String
})
</script>

<template>
  <div class="card w-96 shadow-xl border-2">
    <figure ><img :src="imageUrl" :alt="title" class="h-64"/></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <p>Artisan : {{ artisan }}</p>
      <p>Price : ${{ price }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-custom-primary btn-ghost">Ajouter au panier</button>
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