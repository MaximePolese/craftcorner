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

const truncateTitle = (title, length = 30) => {
  return title.length > length ? title.slice(0, length) + '...' : title
}

const cartStore = useCartStore()

const addToCart = () => {
  const product = {
    id: props.id,
    title: props.title,
    description: props.description,
    artisan: props.artisan,
    price: props.price,
    imageUrl: props.imageUrl,
    quantity: 1
  }
  cartStore.addToCart(product)
}

</script>

<template>
  <div class="card w-72 h-96 border-2">
    <RouterLink :to="`/product/${id}`">
      <figure><img :src="imageUrl" :alt="title" class="h-20 pt-4" /></figure>
    </RouterLink>
    <div class="card-body p-4">
      <h2 class="card-title">{{ truncateTitle(title) }}</h2>
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