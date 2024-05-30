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
      const existingProduct = cart.value.find(p => p.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        cart.value.push(product)
      }
    }

    function deleteCartProduct(id) {
      cart.value = cart.value.filter(product => product.id !== id)

    }

    function getCartTotal() {
      return cart.value.reduce((acc, product) => acc + product.price, 0)
    }

    function getCartCount() {
      return cart.value.length
    }

    function updateCartProductQuantity(id, quantity) {
      const product = cart.value.find(product => product.id === id)
      product.quantity = quantity
    }

    return {
      cart,
      getCart,
      deleteCart,
      addToCart,
      deleteCartProduct,
      getCartTotal,
      getCartCount,
      updateCartProductQuantity
    }
  }, { persist: true }
)