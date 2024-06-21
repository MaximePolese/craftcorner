import { ref } from 'vue'
import { defineStore } from 'pinia'

const api_url = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('user', () => {

    const users = ref([])
    const user = ref(null)
    const authUser = ref(null)
    const isAuth = ref(false)

    function fetchUsers() {
      const url = api_url + '/users'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log('users', data)
          users.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getUser(id) {
      const url = api_url + '/users/' + id
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log('user', data)
          user.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getAuthUser(token) {
      const url = api_url + '/user'
      fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('authUser', data)
          authUser.value = data
        })
        .catch(error => console.error('Error:', error))
      isAuth.value = true
    }

    function deleteUser(id, token) {
      const url = api_url + '/users/' + id
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('delete user', data)
          users.value = users.value.filter(user => user.id !== id)
        })
        .catch(error => console.error('Error:', error))
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      authUser.value = null
      isAuth.value = false
    }

    function updateUser(id, newUser, token) {
      const url = api_url + '/users/' + id
      fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          // console.log('newuser', data)
          authUser.value = data
          users.value = users.value.map(user => user.id === id ? data : user)
        })
        .catch(error => console.error('Error:', error))
    }

    async function newUser(user) {
      const url = api_url + '/register'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        if (!response.ok) {
          console.error('Server error:', response.status)
          return
        }
        const data = await response.json()
        console.log('new user', data)
        if (data.access_token) {
          document.cookie = `token=${data.access_token}; path=/;`
          getAuthUser(data.access_token)
        }
        users.value = [...users.value, data.user]
      } catch (error) {
        console.error('Error:', error)
      }
    }
//TODO: vérifier si un user est authentifié avant de se connecter
    async function login(email, password) {
      const url = api_url + '/login'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        const data = await response.json()
        if (data.access_token) {
          document.cookie = `token=${data.access_token}; path=/;`
          getAuthUser(data.access_token)
        } else {
          console.error('No token received')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    function logout(token) {
      const url = api_url + '/logout'
      fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('logout', data)
        })
        .catch(error => console.error('Error:', error))
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      authUser.value = null
      isAuth.value = false
    }

    return {
      users,
      user,
      authUser,
      isAuth,
      fetchUsers,
      getUser,
      deleteUser,
      updateUser,
      newUser,
      login,
      logout
    }
  }, { persist: true }
)