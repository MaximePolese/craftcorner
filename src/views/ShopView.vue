<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'

import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const store = useAppStore()
store.fetchProducts()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="text-3xl pl-28 pt-10">Mon Shop</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="product in store.products" :key="product.id">
              <ProductCard
                v-bind:id="product.id.toString()"
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

<style scoped>

</style>