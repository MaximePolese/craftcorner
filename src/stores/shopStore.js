import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useShopStore = defineStore('shop', () => {

    const shops = ref([])
    const shop = ref(null)

    function fetchShops() {
      fetch('http://localhost:8000/api/shops')
        .then(response => response.json())
        .then(data => {
          console.log('shops', data)
          shops.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getShop(id) {
      fetch(`http://localhost:8000/api/shops/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('shop', data)
          shop.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function deleteShop(id) {
      fetch(`http://localhost:8000/api/shops/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          shops.value = shops.value.filter(product => product.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateShop(id, newShop) {
      fetch(`http://localhost:8000/api/shops/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShop)
      })
        .then(response => response.json())
        .then(data => {
          console.log('shop', data)
          shops.value = shops.value.map(product => product.id === id ? data : product)
        })
        .catch(error => console.error('Error:', error))
    }

    function newShop(shop) {
      fetch(`http://localhost:8000/api/shops`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(shop)
      })
        .then(response => response.json())
        .then(data => {
          console.log('shop', data)
          shops.value = [...shops.value, data]
        })
        .catch(error => console.error('Error:', error))
    }

    return {
      shops,
      shop,
      fetchShops,
      getShop,
      deleteShop,
      updateShop,
      newShop
    }
  }, { persist: true }
)