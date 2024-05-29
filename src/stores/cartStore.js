import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    function getCart() {
      return cart.value
    }

    function deleteCart() {
      cart.value = []
    }

    function addToCart(product) {
      cart.value.push(product)
    }

    function deleteCartProduct(id) {
      cart.value = cart.value.filter(product => product.id !== id)

    }

    return { cart, getCart, deleteCart, addToCart, deleteCartProduct }
  }
)