import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('store', () => {
  const appName = ref('CRAFTEDBY')
  console.log(appName.value)

  return { appName }
})