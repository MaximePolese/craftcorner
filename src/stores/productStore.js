import { ref } from 'vue'
import { defineStore } from 'pinia'

const api_url = import.meta.env.VITE_API_URL

export const useProductStore = defineStore('product', () => {

    const products = ref([])
    const product = ref(null)
    const filteredProducts = ref([])
    const searchProducts = ref([])

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

    function getProductsBy(query) {
      const url = api_url + '/products/filter/' + query
      // console.log('url', url)
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('filtered products', data)
          filteredProducts.value = data
        })
        .catch(error => console.error('Error:', error))
    }

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

    function searchProductsBy(query) {
      const url = api_url + '/products/search/?search_term=' + query
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('search products', data)
          searchProducts.value = data
        })
        .catch(error => console.error('Error:', error))
    }

//  TODO: implement the following functions, headers,credentials, etc
    function deleteProduct(id, token) {
      const url = api_url + '/products/' + id
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('delete product', data)
          products.value = products.value.filter(product => product.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateProduct(id, newProduct, token) {
      const url = api_url + '/products/' + id
      fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
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

    function newProduct(product, token) {
      const url = api_url + '/products'
      fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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
      filteredProducts,
      searchProducts,
      fetchProducts,
      getProduct,
      getProductsBy,
      searchProductsBy,
      deleteProduct,
      updateProduct,
      newProduct
    }
  }, { persist: true }
)