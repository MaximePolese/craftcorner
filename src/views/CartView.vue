<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useCartStore } from '@/stores/cartStore'

const route = useRoute()
const store = useAppStore()
const cartStore = useCartStore()


onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const updateQuantity = (id, newQuantity) => {
  cartStore.updateCartProductQuantity(id, newQuantity)
}

const deleteCartProduct = (id) => {
  cartStore.deleteCartProduct(id)
}

const clearCart = () => {
  cartStore.deleteCart()
}

const newOrder = () => {
  cartStore.newOrder(cartStore.cart)
}

</script>

<template>
  <div class="flex justify-center">
    <div class="container flex m-5 gap-4">
      <div class="sm:w-2/3 flex-col sm:flex-row">
        <h1 class="text-3xl pl-28 py-10">Mon Panier</h1>
        <div v-for="product in cartStore.cart" :key="product.id">
          <div class="custom flex items-center justify-between mt-5">
            <div class="flex items-center gap-4">
              <img :src="product.imageUrl" :alt="product.title" class="pl-5 h-20" />
              <h2 class="card-title">{{ product.title }}</h2>
              <p>Prix : {{ product.price }} €</p>
              <label for="quantity" class="p-5">Quantité :</label>
              <input id="quantity" type="number" min="1" v-model="product.quantity"
                     @change="updateQuantity(product.id, product.quantity)"
                     class="custom-border border-2 bg-white w-16">
            </div>
            <button class="btn btn-custom-primary btn-ghost px-10 m-5" @click="deleteCartProduct(product.id)">
              Supprimer du panier
            </button>
          </div>
        </div>
        <div>
          <button class="btn btn-custom-primary btn-ghost px-20 m-5" @click="clearCart">Vider le panier
          </button>
        </div>
      </div>
      <div class="custom sm:w-1/3 p-6">
        <h2 class="text-2xl font-semibold mb-4">Récapitulatif de la commande :</h2>
        <div v-for="product in cartStore.cart" :key="product.id" class="mb-2">
          <p class="text-lg">{{ product.title }} - {{ product.quantity }} x {{ product.price }} €</p>
        </div>
        <h2 class="text-2xl font-semibold mt-4 items-end">Total : {{ cartStore.getCartTotal() }} €</h2>
        <button class="btn btn-custom-primary btn-ghost px-20 m-5" @click="newOrder">Commander
        </button>
      </div>
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