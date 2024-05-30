import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const appName = ref('CRAFTEDBY')
  const products = ref([])

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products?limit=21')
      .then(response => response.json())
      .then(data => {
        console.log('products', data)
        products.value = data
      })
      .catch(error => console.error('Error:', error))
  }

  return { appName, fetchProducts, products }

})