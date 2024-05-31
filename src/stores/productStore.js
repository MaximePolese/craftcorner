import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProductStore = defineStore('product', () => {

    const products = ref([])
    const product = ref(null)

    function fetchProducts() {
      fetch('https://fakestoreapi.com/products?limit=21')
        .then(response => response.json())
        .then(data => {
          console.log('products', data)
          products.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getProduct(id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('product', data)
          product.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function deleteProduct(id) {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          products.value = products.value.filter(product => product.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateProduct(id, newProduct) {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
        .then(response => response.json())
        .then(data => {
          console.log('product', data)
          products.value = products.value.map(product => product.id === id ? data : product)
        })
        .catch(error => console.error('Error:', error))
    }

    function newProduct(product) {
      fetch(`https://fakestoreapi.com/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(data => {
          console.log('product', data)
          products.value = [...products.value, data]
        })
        .catch(error => console.error('Error:', error))
    }

    return {
      products,
      product,
      fetchProducts,
      getProduct,
      deleteProduct,
      updateProduct,
      newProduct
    }
  }, { persist: true }
)