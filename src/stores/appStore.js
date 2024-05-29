import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', () => {
  const appName = ref('CRAFTEDBY')
  const isAuth = ref(false)

  function setAuth(value) {
    isAuth.value = value
    localStorage.setItem('isAuth', value.toString())
  }

  return { appName, isAuth, setAuth }
})