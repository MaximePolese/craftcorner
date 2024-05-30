import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createPersistedState from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

pinia.use(createPersistedState)

app.use(pinia)
app.use(router)

app.mount('#app')
