<script setup>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const store = useAppStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>


<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="pl-28 pt-10">Shop test</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="product in products" :key="product.id">
              <RouterLink :to="`/product/${product.id}`">
                <ProductCard
                  v-bind:id="product.id"
                  v-bind:title="product.title"
                  v-bind:description="product.description"
                  artisan="Toto le menuisier"
                  v-bind:price="product.price"
                  v-bind:imageUrl="product.image"
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