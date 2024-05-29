import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {
    const user = ref({
      id: '1',
      pseudo: 'toto',
      firstName: 'toto',
      lastName: 'toto',
      email: 'maxime.polese@le-campus-numerique.fr',
      address: 'totoville',
      phoneNumber: 'totophone',
      image: null,
      deliveryAddress: 'totolivraison',
      password: 'test',
      passwordConfirmation: 'test',
      rgpd: true,
      newsletter: false
    })

    function getUser(id) {
      if (user.value.id === id) {
        return user.value
      }
    }

    function deleteUser(id) {
      if (user.value.id === id) {
        user.value = null
      }
    }

    function updateUser(id, newUser) {
      if (user.value.id === id) {
        user.value = newUser
      }
    }

    const users = ref([])

    return { user, getUser, deleteUser, updateUser, users }
  }
)