<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useCartStore } from '@/stores/cartStore.js'

const route = useRoute()
const store = useAppStore()
const cartStore = useCartStore()
const id = route.params.id
let quantity = ref(1)

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

import { useFetch } from '@vueuse/core'
const { data: product } = useFetch('https://fakestoreapi.com/products/' + id).json()

const addToCart = () => {
  const productToAdd = {
    id: id.value,
    title: product.title,
    description: product.description,
    artisan: 'Toto',
    price: product.price,
    imageUrl: product.image,
    quantity: quantity.value
  }
  cartStore.addToCart(productToAdd)
}

</script>

<template>
  <div class="flex justify-center py-10">
    <div class="container">
      <div class="flex justify-center">
        <img class="h-96 p-5" :src="product.image" :alt="product.title" />
      </div>
      <h1 class="text-3xl p-5">{{ product.title }}</h1>
      <div class="flex flex-col sm:flex-row gap-4 p-5">
        <div class="custom p-5">
          <p>Artisan : Toto</p>
          <p>Description : {{ product.description }}</p>
          <p>Prix : {{ product.price }} €</p>
        </div>
        <div class="flex flex-col custom p-5">
          <div class="rating pb-5">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
            <p class="pl-5">362 Avis</p>
          </div>
          <select class="select select-bordered w-full max-w-xs custom-border border-2 mb-2 bg-white">
            <option disabled selected>Couleur</option>
            <option>Bleu</option>
            <option>Vert</option>
            <option>Rouge</option>
            <option>Jaune</option>
            <option>Orange</option>
            <option>Rose</option>
          </select>
          <select class="select select-bordered w-full max-w-xs custom-border border-2 mb-2 bg-white">
            <option disabled selected>Matière</option>
            <option>Bois</option>
            <option>Acier</option>
            <option>Cuir</option>
            <option>Pierre</option>
            <option>Carton</option>
            <option>Paipier</option>
          </select>
          <select class="select select-bordered w-full max-w-xs custom-border border-2 mb-5 bg-white">
            <option disabled selected>Taille</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <div class="mb-2">
            <label for="quantity" class="block mb-1">Quantité :</label>
            <input id="quantity" type="number" min="1" v-model="quantity"
                   class="w-full max-w-xs custom-border border-2 bg-white">
          </div>
          <button class="btn btn-custom-primary btn-ghost" @click="addToCart">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom {
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
  border-color: var(--vt-c-platinum);
  border-width: 2px;
  border-radius: var(--rounded-box, 1rem);
}
</style>