<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore.js'

const router = useRouter()
const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})
//TODO: améliorer le front de la login page
const email = ref('')
const password = ref('')

const submitForm = () => {
  userStore.login(email.value, password.value)
  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="login p-10">
      <div class="card shrink-0 w-full max-w-sm bg-base-100">
        <form class="card-body" @submit.prevent="submitForm">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered" v-model="email" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" v-model="password" required />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-custom-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>