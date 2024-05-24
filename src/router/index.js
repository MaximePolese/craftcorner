import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    // {
    //   path: '/shop',
    //   name: 'shop',
    //   component: () => import('../views/ShopView.vue'),
    //   meta: {
    //     title: 'Shop'
    //   }
    // },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: () => import('../views/ProductView.vue'),
    //   meta: {
    //     title: 'Product'
    //   }
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: () => import('../views/CartView.vue'),
    //   meta: {
    //     title: 'Cart'
    //   }
    // },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: () => import('../views/UserView.vue'),
    //   meta: {
    //     title: 'User'
    //   }
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue'),
    //   meta: {
    //     title: 'Not Found'
    //   }
    // }
  ]
})

export default router
