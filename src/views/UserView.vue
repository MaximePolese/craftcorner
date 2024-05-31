<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore.js'
import ShopCard from '@/components/ShopCard.vue'

const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const id = route.params.id
userStore.getUser(id)

</script>

<template>
  <div class="flex justify-center py-10">
    <div class="container">
      <div class="flex justify-center">
        <img class="h-96 p-5"
             src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
             alt="userpicture" />
      </div>
      <h1 class="text-3xl p-5">{{ userStore.user.username }}</h1>
      <div class="custom p-5 mx-5">
        <p>Email : {{ userStore.user.email }}</p>
        <p>Téléphone : {{ userStore.user.phone }}</p>
        <p>Adresse : {{ userStore.user.address.city }}</p>
        <div class="rating pb-5">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled checked />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" disabled />
          <p class="pl-5">362 Avis</p>
        </div>
      </div>
      <h1 class="text-3xl p-5 mt-10">Les boutiques de {{ userStore.user.username }}</h1>
      <div class="flex flex-col items-center sm:flex-row gap-4">
        <ShopCard id="1" shopname="Menuiserie" biography="La boutique dédié aux objets en bois" theme="Bois"
                  :userid="userStore.user.id.toString()" />
        <ShopCard id="2" shopname="Métallerie" biography="La boutique dédié aux objets en métal" theme="Métal"
                  :userid="userStore.user.id.toString()" />
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