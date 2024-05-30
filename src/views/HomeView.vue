<script setup>
// Importing necessary modules and components
import { useRoute } from 'vue-router' // A composable for accessing the current route
import { onMounted } from 'vue' // A lifecycle hook that is called after the component is mounted
import { useAppStore } from '@/stores/appStore' // A composable for accessing the application store

import ProductCard from '@/components/ProductCard.vue' // A component for displaying a product
import Carousel from '@/components/Carousel.vue'
import BannerSignUp from '@/components/BannerSignUp.vue' // A component for displaying a carousel

// Using the composables
const route = useRoute() // Get the current route
const store = useAppStore() // Get the application store
store.fetchProducts()

// Set the document title when the component is mounted
onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <Carousel /> <!-- Display the carousel -->
      <h1 class="text-3xl pl-28 pt-10">Meilleures ventes</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <!-- Loop over the products and display each one in a ProductCard -->
            <li v-for="product in store.products" :key="product.id">
              <ProductCard
                v-bind:id="product.id.toString()"
                v-bind:title="product.title"
                v-bind:description="product.description"
                artisan="Toto"
                v-bind:price="product.price"
                v-bind:imageUrl="product.image"
              />
            </li>
          </ul>
        </div>
      </div>
      <BannerSignUp /> <!-- Display the sign up banner -->
    </div>
  </div>
</template>

<style scoped>

</style>