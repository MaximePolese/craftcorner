<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore.js'
import { useShopStore } from '@/stores/shopStore.js'
import ShopCard from '@/components/ShopCard.vue'
import { formatName } from '../stores/helpers.js'

const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()
const shopStore = useShopStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const id = route.params.id
userStore.getUser(id)
shopStore.getShopsByUser(id)

</script>

<template>
  <div class="flex justify-center py-10">
    <div class="container">
      <div class="flex justify-center">
        <img class="h-96 p-5" :src="userStore.user.image" alt="userpicture" />
      </div>
      <h1 class="text-3xl p-5">{{ formatName(userStore.user.pseudo) }}</h1>
      <div class="custom p-5 mx-5">
        <p>Email : {{ userStore.user.email }}</p>
        <p>Téléphone : {{ userStore.user.phone_number }}</p>
        <p>Adresse : {{ userStore.user.address }}</p>
        <div class="rating pb-5">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled checked />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <p class="pl-5">362 Avis</p>
        </div>
      </div>
      <div v-if="shopStore.shopsByUser.length > 0">
        <h1 class="text-3xl p-5 mt-10">Les boutiques de {{ formatName(userStore.user.pseudo) }}</h1>
        <div class="flex flex-col items-center py-10">
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="shop in shopStore.shopsByUser" :key="shop.id">
              <ShopCard
                v-bind:id="shop.id.toString()"
                v-bind:shop_name="shop.shop_name"
                v-bind:biography="shop.biography"
                v-bind:shop_theme="shop.shop_theme"
                v-bind:user_id="userStore.user.id.toString()"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom {
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
  border-color: var(--vt-c-platinum);
  border-width: 2px;
  border-radius: var(--rounded-box, 1rem);
}
</style>