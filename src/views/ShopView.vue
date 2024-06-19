<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useProductStore } from '@/stores/productStore.js'
import { useShopStore } from '@/stores/shopStore.js'

import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const store = useAppStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const shopStore = useShopStore()
const id = route.params.shopid
shopStore.getShop(id)

const productStore = useProductStore()
productStore.fetchProducts()

</script>

<template>
  <div class="flex justify-center">
    <div class="container">
      <h1 class="text-3xl pl-28 pt-10">{{ shopStore.shop.shop_name }}</h1>
      <div class="flex flex-col items-center py-10">
        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <li v-for="product in productStore.products" :key="product.id">
            <ProductCard
              v-bind:id="product.id.toString()"
              v-bind:product_name="product.product_name"
              v-bind:description="product.description"
              v-bind:story="product.story"
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
  </div>
</template>

<style scoped>

</style>