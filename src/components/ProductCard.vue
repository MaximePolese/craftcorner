<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const props = defineProps({
  id: String,
  title: String,
  description: String,
  artisan: String,
  price: Number,
  imageUrl: String
})

const cartStore = useCartStore()

const addToCart = () => {
  const product = {
    id: props.id,
    title: props.title,
    description: props.description,
    artisan: props.artisan,
    price: props.price,
    imageUrl: props.imageUrl
  }
  cartStore.addToCart(product)
}

</script>

<template>
  <div class="card w-72 h-96 shadow-xl border-2">
    <figure><img :src="imageUrl" :alt="title" class="h-40 pt-4" /></figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ title }}</h2>
      <p>Artisan : {{ artisan }}</p>
      <p>Prix : {{ price }} €</p>
      <div class="card-actions justify-end">
        <button class="btn btn-custom-primary btn-ghost" @click="addToCart">Ajouter au panier</button>
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