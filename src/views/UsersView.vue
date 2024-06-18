<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore'
import UserCard from '@/components/UserCard.vue'

const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()
userStore.fetchUsers()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="text-3xl pl-28 pt-10">Nos Artisans</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="user in userStore.users" :key="user.id">
              <UserCard
                v-bind:id="user.id"
                v-bind:email="user.email"
                v-bind:username="user.pseudo"
                v-bind:address="user.address"
                v-bind:phone_number="user.phone_number"
                v-bind:image="user.image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>