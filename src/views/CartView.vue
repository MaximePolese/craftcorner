<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useCartStore } from '@/stores/cartStore'

const route = useRoute()
const store = useAppStore()
const cartStore = useCartStore()
const cart = cartStore.cart

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const deleteCartProduct = (id) => {
  cartStore.deleteCartProduct(id)
}

const clearCart = () => {
  cartStore.deleteCart()
}

</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="text-3xl pl-28 py-10">Mon Panier</h1>

      <div v-for="product in cart" :key="product.id">
        <div class="custom shadow-xl flex items-center flex-1 gap-4 justify-between mt-5">
          <div class="flex items-center gap-4">
            <img :src="product.imageUrl" :alt="product.title" class="pl-5 h-20" />
            <h2 class="card-title">{{ product.title }}</h2>
            <p>Prix : {{ product.price }} €</p>
            <p>Quantité : </p>
          </div>
          <button class="btn btn-custom-primary btn-ghost px-10 m-5" @click="deleteCartProduct(product.id)">
            Supprimer du panier
          </button>
        </div>
      </div>

      <button class="btn btn-custom-primary btn-ghost px-20 m-5 self-end" @click="clearCart">Vider le panier</button>
    </div>
  </div>
</template>

<style scoped>
.custom {
  border-color: var(--vt-c-platinum);
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
  border-width: 2px;
  border-radius: var(--rounded-box, 1rem);
}
</style>