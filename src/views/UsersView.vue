<script setup>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import UserCard from '@/components/UserCard.vue'


const route = useRoute()
const store = useAppStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const { data: users } = useFetch('https://fakestoreapi.com/users').json()
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="text-3xl pl-28 pt-10">Nos Artisans</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="user in users" :key="user.id">
              <RouterLink :to="`/users/${user.id}`">
                <UserCard
                  v-bind:id="user.id"
                  v-bind:email="user.email"
                  v-bind:username="user.username"
                  v-bind:address="user.address"
                  v-bind:phone="user.phone"
                />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>