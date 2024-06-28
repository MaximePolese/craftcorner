<script setup>

import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useProductStore } from '@/stores/productStore.js'
import { useUserStore } from '@/stores/userStore.js'

import ProductCard from '@/components/ProductCard.vue'
import Carousel from '@/components/Carousel.vue'
import BannerSignUp from '@/components/BannerSignUp.vue'

const route = useRoute()
const store = useAppStore()
const productStore = useProductStore()
const userStore = useUserStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

userStore.getToken()
productStore.fetchProducts()
</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <Carousel />
      <h1 class="text-3xl pl-28 pt-10">Nos meilleures ventes</h1>
      <div class="flex flex-col items-center py-10">
        <div>
          <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li v-for="product in productStore.products" :key="product.id">
              <ProductCard
                v-bind:id="product.id.toString()"
                v-bind:product_name="product.product_name"
                v-bind:description="product.description"
                v_bind:story="product.story"
                v-bind:image="product.image"
                v-bind:material="product.material"
                v-bind:color="product.color"
                v-bind:size="product.size"
                v-bind:category="product.category"
                v-bind:price="product.price"
                v-bind:stock_quantity="product.stock_quantity"
                v-bind:shop_id="product.shop_id"
              />
            </li>
          </ul>
        </div>
      </div>
      <BannerSignUp />
    </div>
  </div>
</template>

<style scoped>

</style>