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
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: 'Register'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Login'
      }
    },
    // {
    //   path: '/logout',
    //   name: 'Logout',
    //   component: () => import('../views/LogoutView.vue'),
    //   meta: {
    //     title: 'Logout'
    //   }
    // },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        title: 'Profile'
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/UsersView.vue'),
      meta: {
        title: 'Users'
      }
    },
    {
      path: '/users/:id',
      name: 'User',
      component: () => import('../views/UserView.vue'),
      meta: {
        title: 'User'
      }
    },
    {
      path: '/users/:id/:shopid',
      name: 'Shop',
      component: () => import('../views/ShopView.vue'),
      meta: {
        title: 'Shop'
      }
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/ProductView.vue'),
      meta: {
        title: 'Product'
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        title: 'Cart'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Not Found'
      }
    }
    // {
    //   path: '/search/:query',
    //   name: 'Search',
    //   component: () => import('../views/SearchView.vue'),
    //   meta: {
    //     title: 'Search'
    //   }
    // },
  ]
})

export default router
