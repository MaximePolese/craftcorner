import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {

    const users = ref([])
    const user = ref(null)
    const token = ref(null)
    const authUser = ref(null)
    const isAuth = ref(false)

    function decode(token) {
      return JSON.parse(
        decodeURIComponent(
          atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
        )
      )
    }

    function fetchUsers() {
      fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then(data => {
          console.log('users', data)
          users.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function getUser(id) {
      fetch(`https://fakestoreapi.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('user', data)
          user.value = data
        })
        .catch(error => console.error('Error:', error))
    }

    function deleteUser(id) {
      fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          users.value = users.value.filter(user => user.id !== id)
        })
        .catch(error => console.error('Error:', error))
    }

    function updateUser(id, newUser) {
      fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          console.log('user', data)
          users.value = users.value.map(user => user.id === id ? data : user)
        })
        .catch(error => console.error('Error:', error))
    }

    function newUser(user) {
      fetch(`https://fakestoreapi.com/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          console.log('user', data)
          users.value = [...users.value, data]
        })
        .catch(error => console.error('Error:', error))
    }

    async function login(username, password) {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
        const data = await response.json()
        if (data.token) {
          token.value = data.token
          const userId = decode(token.value).sub
          const userResponse = await fetch(`https://fakestoreapi.com/users/${userId}`)
          const userData = await userResponse.json()
          console.log('authUser', userData)
          authUser.value = userData
          isAuth.value = true
        } else {
          console.error('No token received')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    function logout() {
      token.value = null
      authUser.value = null
      isAuth.value = false
    }

    return {
      users,
      user,
      token,
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