<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
// import { useShopStore} from '@/stores/shopStore.js'
// import { useUserStore} from '@/stores/userStore.js'

// const shopStore = useShopStore()
// const userStore = useUserStore()

const props = defineProps({
  id: String,
  product_name: String,
  description: String,
  story: String,
  image: String,
  material: String,
  color: String,
  size: String,
  category: String,
  price: Number,
  stock_quantity: Number,
  shop_id: String
})

const truncateTitle = (title, length = 30) => {
  return title.length > length ? title.slice(0, length) + '...' : title
}

const cartStore = useCartStore()

const addToCart = () => {
  const product = {
    id: props.id,
    product_name: props.product_name,
    description: props.description,
    story: props.story,
    image: props.image,
    material: props.material,
    color: props.color,
    size: props.size,
    category: props.category,
    price: props.price,
    stock_quantity: props.stock_quantity,
    shop_id: props.shop_id,
    quantity: 1
  }
  cartStore.addToCart(product)
}

</script>

<template>
  <div class="card w-72 h-96 border-2">
    <RouterLink :to="`/product/${id}`">
      <figure><img :src="image" :alt="product_name" class="h-36 pt-4" /></figure>
    </RouterLink>
    <div class="card-body p-4">
      <h2 class="card-title">{{ truncateTitle(product_name) }}</h2>
      <p>Artisan : </p>
      <p>Prix : {{ price }} €</p>
      <div class="card-actions justify-end">
        <button class="btn btn-custom-primary btn-ghost" @click="addToCart">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-color: var(--vt-c-platinum);
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
}
</style>