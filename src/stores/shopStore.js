import { ref } from 'vue'
import { defineStore } from 'pinia'

const api_url = import.meta.env.VITE_API_URL

export const useShopStore = defineStore('shop', () => {

    const shops = ref([])
    const shop = ref(null)
    const shopsByUser = ref([])

    function fetchShops() {
      const url = api_url + '/shops'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('shops', data)
          shops.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getShopsByUser(id) {
      fetchShops()
      shopsByUser.value = shops.value.filter(shop => shop.user_id === id)
    }

    function getShop(id) {
      const url = api_url + '/shops/' + id
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('shop', data)
          shop.value = data
        })
        .catch(error => console.error('Error:', error))
    }
//-------------------------------------------------------------------------------------------//
    function deleteShop(id) {
      const url = api_url + '/shops/' + id
      fetch(url, {
        method: 'DELETE',
        headers: {
          // 'Authorization': `Bearer ${token.value}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('delete shop', data)
          shops.value = shops.value.filter(shop => shop.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateShop(id, newShop) {
      const url = api_url + '/shops/' + id
      fetch(url, {
        method: 'PUT',
        headers: {
          // 'Authorization': `Bearer ${token.value}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShop)
      })
        .then(response => response.json())
        .then(data => {
          console.log('shop', data)
          shops.value = shops.value.map(shop => shop.id === id ? data : shop)
        })
        .catch(error => console.error('Error:', error))
    }

    function newShop(shop) {
      const url = api_url + '/shops'
      fetch(url, {
        method: 'POST',
        headers: {
          // 'Authorization': `Bearer ${token.value}`,
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
      shopsByUser,
      fetchShops,
      getShopsByUser,
      getShop,
      deleteShop,
      updateShop,
      newShop
    }
  }, { persist: true }
)