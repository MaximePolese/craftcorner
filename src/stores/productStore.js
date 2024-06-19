import { ref } from 'vue'
import { defineStore } from 'pinia'

const api_url = import.meta.env.VITE_API_URL

export const useProductStore = defineStore('product', () => {

    const products = ref([])
    const product = ref(null)
    const productsByShop = ref([])

    function fetchProducts() {
      const url = api_url + '/products'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('products', data)
          products.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    // function getProductsByShop(filter) {
    //   const url = api_url + '/products?filter=' + filter
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('product', data)
    //       product.value = data
    //     })
    //     .catch(error => console.error('Error:', error))
    // }

    function getProduct(id) {
      const url = api_url + '/products/' + id
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('product', data)
          product.value = data
        })
        .catch(error => console.error('Error:', error))
    }

//-------------------------------------------------------------------------------------------//
    function deleteProduct(id) {
      const url = api_url + '/products/' + id
      fetch(url, {
        method: 'DELETE',
        headers: {
          // 'Authorization': `Bearer ${token.value}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('delete product', data)
          products.value = products.value.filter(product => product.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateProduct(id, newProduct) {
      const url = api_url + '/products/' + id
      fetch(url, {
        method: 'PUT',
        headers: {
          // 'Authorization': `Bearer ${token.value}`,
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
      const url = api_url + '/products'
      fetch(url, {
        method: 'POST',
        headers: {
          // 'Authorization': `Bearer ${token.value}`,
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