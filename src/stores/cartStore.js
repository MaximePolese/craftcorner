import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCookie } from '@/stores/helpers.js'

const api_url = import.meta.env.VITE_API_URL

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
      console.log(cart.value)
    }

    function deleteCartProduct(id) {
      cart.value = cart.value.filter(product => product.id !== id)
      console.log(cart.value)
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
      console.log(cart.value)
    }

    function newOrder() {
      const token = decodeURIComponent(getCookie('XSRF-TOKEN'))
      const products = cart.value.map(product => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price
      }))
      console.log('order', products)
      const url = api_url + '/orders'
      fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://localhost:5173',
          'X-XSRF-TOKEN': token
        },
        body: JSON.stringify({
          data: products
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('order validated', data)
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