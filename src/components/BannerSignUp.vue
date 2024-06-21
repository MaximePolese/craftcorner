<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import image from '@/components/img/image6.png'

const userStore = useUserStore()
const bgImage = ref(image)
</script>

<template>
  <div class="hero min-h-screen"
       :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="hero-content text-black">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">DEVENEZ MARCHAND !</h1>
        <p class="mb-5 text-2xl">Vous fabriquez des bougies et du gin artisanal dans votre garage?</p>
        <div class="flex items-center mb-5">
          <p class="text-2xl">Vendez les sur</p>
          <img src="@/assets/logo.svg" alt="Logo" class="pl-2 min-h-6 h-6" />
        </div>
        <div v-if="!userStore.isAuth">
          <RouterLink to="/register">
            <button class="btn btn-primary btn-custom-primary btn-ghost">Devenir Marchand</button>
          </RouterLink>
        </div>
        <div v-else>
          <!--          TODO: Add link to create a shop-->
          <RouterLink to="/">
            <button class="btn btn-primary btn-custom-primary btn-ghost">Devenir Marchand</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>