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
      const total = cart.value.reduce((acc, product) => acc + (product.price * product.quantity), 0)
      return parseFloat(total.toFixed(2))
    }

    function getCartCount() {
      return cart.value.length
    }

    function updateCartProductQuantity(id, quantity) {
      const product = cart.value.find(product => product.id === id)
      product.quantity = quantity
    }

    function newOrder(cart) {
      const products = cart.value.map(product => ({
        id: product.id,
        quantity: product.quantity
      }))
      fetch('http://localhost:8000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          products: products
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('order', data)
        })
        .catch(error => console.error('Error:', error))
      cart.value = []
    }

    return {
      cart,
      getCart,
      deleteCart,
      addToCart,
      deleteCartProduct,
      getCartTotal,
      getCartCount,
      updateCartProductQuantity,
      newOrder
    }
  },
  {
    persist: true
  }
)