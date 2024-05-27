<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import Product from '@/components/Product.vue'

const store = useAppStore()

onMounted(() => {
  const route = useRoute()
  document.title = `${route.name} - ${store.appName}`
})

import { useFetch } from '@vueuse/core'

const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <div class="flex flex-col items-center py-10">

        <h1>Accueil</h1>
        <p>Bienvenue sur la page d'accueil de notre site.</p>

        <div class="p-12">
          <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="product in products" :key="product.id">
              <Product
                v-bind:title="product.title"
                v-bind:description="product.description"
                artisan="Toto le menuisier"
                v-bind:price="product.price"
                v-bind:imageUrl="product.image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>