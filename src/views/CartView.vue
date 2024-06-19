<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useCartStore } from '@/stores/cartStore'
import { useUserStore } from '@/stores/userStore.js'

const route = useRoute()
const store = useAppStore()
const cartStore = useCartStore()
const userStore = useUserStore()

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
  if (cartStore.cart.length === 0) {
    alert('Votre panier est vide')
  } else {
    if (userStore.isAuth === true) {
      cartStore.newOrder()
      alert('Votre commande a bien été enregistrée')
    } else {
      alert('Vous devez être connecté pour passer une commande')
    }
  }
}

</script>

<template>
  <div class="flex justify-center">
    <div class="container m-5 gap-4">
      <h1 class="text-3xl pl-28 py-10">Mon Panier</h1>
      <div class="flex flex-col sm:flex-row mx-4">
        <div class="flex-2 gap-4 ">
          <div v-for="product in cartStore.cart" :key="product.id">
            <div class="custom flex items-center justify-between mb-4">
              <div class="flex flex-col gap-4 p-5">
                <div class="flex gap-10 items-center">
                  <img :src="product.image" :alt="product.product_name" class="h-20" />
                  <h2 class="card-title">{{ product.product_name }}</h2>
                </div>
                <label for="quantity">Quantité : <input id="quantity" type="number" min="1" v-model="product.quantity"
                                                        @change="updateQuantity(product.id, product.quantity)"
                                                        class="custom-border border-2 bg-white w-12"></label>
                <p>Prix : {{ product.price }} €</p>
              </div>

              <div class="p-5" @click="deleteCartProduct(product.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.5576 5H17.7303L16.4491 3.68C15.9801 3.24459 15.349 3.00041 14.6913 3H11.5994C10.9303 3.00529 10.2907 3.26056 9.82044 3.71L8.56036 5H5.73313C5.29453 5 4.93896 5.33579 4.93896 5.75C4.93896 6.16421 5.29453 6.5 5.73313 6.5H20.5576C20.9962 6.5 21.3517 6.16421 21.3517 5.75C21.3517 5.33579 20.9962 5 20.5576 5ZM10.964 4.74C11.133 4.58138 11.3611 4.49163 11.5994 4.49H14.6913C14.9197 4.48936 15.1396 4.57171 15.3055 4.72L15.5702 4.99H10.7205L10.964 4.74Z"
                        fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.18251 9.52V17C5.18251 19.4632 7.29691 21.46 9.90515 21.46H16.3856C18.9938 21.46 21.1082 19.4632 21.1082 17V9.52C21.1082 8.41543 20.16 7.52 18.9904 7.52H7.34264C6.77367 7.50925 6.22406 7.71521 5.81769 8.09145C5.41132 8.4677 5.18239 8.98256 5.18251 9.52ZM10.7629 13.05C10.7629 13.4642 10.4073 13.8 9.96869 13.8C9.53008 13.8 9.17452 13.4642 9.17452 13.05V10.68C9.17452 10.2658 9.53008 9.93 9.96869 9.93C10.4073 9.93 10.7629 10.2658 10.7629 10.68V13.05ZM13.1454 17.75C13.584 17.75 13.9395 17.4142 13.9395 17V10.68C13.9395 10.2658 13.584 9.93 13.1454 9.93C12.7067 9.93 12.3512 10.2658 12.3512 10.68V17C12.3512 17.4142 12.7067 17.75 13.1454 17.75ZM17.1162 13.05C17.1162 13.4642 16.7606 13.8 16.322 13.8C15.8834 13.8 15.5279 13.4642 15.5279 13.05V10.68C15.5279 10.2658 15.8834 9.93 16.322 9.93C16.7606 9.93 17.1162 10.2658 17.1162 10.68V13.05Z"
                        fill="black" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <button class="btn btn-custom-primary btn-ghost px-20 m-5" @click="clearCart">Vider le panier
            </button>
          </div>
        </div>
        <div class="custom flex-1 p-6 sm:ml-4 sm:max-w-[400px]">
          <h2 class="text-2xl font-semibold mb-4">Récapitulatif de la commande :</h2>
          <div v-for="product in cartStore.cart" :key="product.id" class="mb-2">
            <p class="text-lg">{{ product.product_name }} - {{ product.quantity }} x {{ product.price }} €</p>
          </div>
          <h2 class="text-2xl font-semibold mt-4 items-end">Total : {{ cartStore.getCartTotal() }} €</h2>
          <button class="btn btn-custom-primary btn-ghost px-20 m-5" @click="newOrder">Commander
          </button>
        </div>
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