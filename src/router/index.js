import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/shops',
      name: 'Shops',
      component: () => import('../views/ShopsView.vue'),
      meta: {
        title: 'Shops'
      }
    },
    // {
    //   path: '/product',
    //   name: 'Product',
    //   component: () => import('../views/ProductView.vue'),
    //   meta: {
    //     title: 'Product'
    //   }
    // },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        title: 'Cart'
      }
    },
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: () => import('../views/UserView.vue'),
    //   meta: {
    //     title: 'User'
    //   }
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'Not-found',
    //   component: () => import('../views/NotFoundView.vue'),
    //   meta: {
    //     title: 'Not Found'
    //   }
    // }
  ]
})

export default router
