<script setup>
import { useCartStore } from '../stores/cartStore'
import { useUserStore } from '@/stores/userStore.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getCookie } from '@/stores/helpers.js'

const router = useRouter()
const cartStore = useCartStore()
const userStore = useUserStore()
const cartCount = computed(() => cartStore.getCartCount())
const cartTotal = computed(() => cartStore.getCartTotal())


const logout = () => {
  const token = getCookie('token')
  const confirmation = confirm('Etes-vous sûr de vouloir vous déconnecter ?')
  if (confirmation) {
    userStore.logout(token)
    router.push('/')
  }
}

</script>

<template>
  <div class="navbar justify-center custom-layout">
    <div class="container flex justify-between gap-2">
      <div class="flex-1">
        <RouterLink to="/">
          <img src="@/assets/logo.svg" alt="Logo" class="min-h-12 h-12 hidden sm:block" />
          <img src="/public/favicon.ico" alt="Logo" class="pl-2 min-h-8 h-8 block sm:hidden " />
        </RouterLink>
      </div>
      <div class="flex-2 sm:flex-1">
        <div class="form-control">
          <input type="text" placeholder="Search"
                 class="input input-bordered h-8 w-full rounded-full custom-border border-2 bg-white text-black" />
        </div>
      </div>
      <div class="flex-1 flex justify-end gap-2">
        <div class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
              <path
                d="M9.16675 9.66663H30.8334C32.8417 9.66663 33.3334 9.16957 33.3334 8.45695C33.3334 7.74432 32.8417 7.16663 30.8334 7.16663H9.16675C7.15844 7.16663 6.66675 7.74432 6.66675 8.45695C6.66675 9.16957 7.15844 9.66663 9.16675 9.66663Z"
                fill="#DBDFE6" />
              <path
                d="M30.8334 19.2096H9.16675C7.15844 19.2096 6.66675 19.7873 6.66675 20.5C6.66675 21.2126 7.15844 21.7903 9.16675 21.7903H30.8334C32.8417 21.7903 33.3334 21.2126 33.3334 20.5C33.3334 19.7873 32.8417 19.2096 30.8334 19.2096Z"
                fill="#DBDFE6" />
              <path
                d="M30.8334 31.2526H9.16675C7.15844 31.2526 6.66675 31.8303 6.66675 32.543C6.66675 33.2556 7.15844 33.8333 9.16675 33.8333H30.8334C32.8417 33.8333 33.3334 33.2556 33.3334 32.543C33.3334 31.8303 32.8417 31.2526 30.8334 31.2526Z"
                fill="#DBDFE6" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] p-2 custom-layout rounded-box w-52">
            <li>
              <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
              <RouterLink to="/users">Les Artisans</RouterLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.78345 7.58337H7.45011L7.53345 7.60004C9.84371 7.64485 11.8623 9.17228 12.5334 11.3834L12.8668 12.5334H30.2501C31.7852 12.5404 33.2428 13.2084 34.2501 14.3667C35.2546 15.5323 35.6991 17.079 35.4668 18.6L34.4668 25.5C34.1337 28.1449 31.899 30.1376 29.2334 30.1667H19.4334C17.0923 30.158 15.0305 28.6235 14.3501 26.3834L10.1334 12.1667C9.81055 10.947 8.71179 10.0939 7.45011 10.0834H5.78345C5.09309 10.0834 4.53345 9.52373 4.53345 8.83337C4.53345 8.14302 5.09309 7.58337 5.78345 7.58337ZM16.7501 25.5834C17.1039 26.77 18.1952 27.5834 19.4334 27.5834H29.2334C30.6129 27.5684 31.7811 26.5621 32.0001 25.2L33.0001 18.2834C33.1363 17.4783 32.9143 16.6538 32.3922 16.026C31.87 15.3982 31.0999 15.0296 30.2834 15.0167H13.6168L16.7501 25.5834Z"
                      fill="#DBDFE6" />
                <path
                  d="M19.0501 32.1667C18.1296 32.1667 17.3834 32.9129 17.3834 33.8334C17.3834 34.7538 18.1296 35.5 19.0501 35.5C19.9706 35.5 20.7168 34.7538 20.7168 33.8334C20.7168 32.9129 19.9706 32.1667 19.0501 32.1667Z"
                  fill="#DBDFE6" />
                <path
                  d="M29.0501 32.1667C28.1296 32.1667 27.3834 32.9129 27.3834 33.8334C27.3834 34.7538 28.1296 35.5 29.0501 35.5C29.9706 35.5 30.7168 34.7538 30.7168 33.8334C30.7168 32.9129 29.9706 32.1667 29.0501 32.1667Z"
                  fill="#DBDFE6" />
              </svg>
              <span class="badge badge-sm indicator-item" v-if="cartCount > 0">{{ cartCount }}</span>
            </div>
          </div>
          <div tabindex="0" class=" z-[1] card card-compact dropdown-content w-52 custom-layout">
            <div class="card-body">
              <span class="font-bold text-lg">{{ cartCount }} {{ cartCount > 1 ? 'articles' : 'article' }}</span>
              <span class="text-custom-primary">Total : {{ cartTotal }} €</span>
              <div class="card-actions">
                <RouterLink to="/cart">
                  <button class="btn btn-custom-primary btn-block btn-ghost">Voir mon panier</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div v-if="userStore.isAuth" class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M32.6334 28.35L33.0334 30.25C33.4125 31.8926 33.0382 33.6187 32.0128 34.9569C30.9875 36.295 29.4181 37.1054 27.7334 37.1666H12.2667C10.582 37.1054 9.01269 36.295 7.98732 34.9569C6.96195 33.6187 6.58769 31.8926 6.96674 30.25L7.36674 28.35C7.8268 25.7779 10.0378 23.8878 12.6501 23.8333H27.3501C29.9624 23.8878 32.1734 25.7779 32.6334 28.35ZM27.7334 34.65C28.5797 34.6402 29.3762 34.248 29.9001 33.5833V33.6C30.5429 32.7936 30.7933 31.7429 30.5834 30.7333L30.1834 28.8333C29.9615 27.4253 28.7745 26.3709 27.3501 26.3166H12.6501C11.2257 26.3709 10.0387 27.4253 9.81675 28.8333L9.41675 30.7333C9.21201 31.7376 9.46219 32.781 10.1001 33.5833C10.624 34.248 11.4204 34.6402 12.2667 34.65H27.7334Z"
                      fill="#DBDFE6" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.8334 20.4999H19.1667C15.4848 20.4999 12.5001 17.5152 12.5001 13.8333V9.43328C12.4956 7.94671 13.0842 6.51974 14.1353 5.46857C15.1865 4.4174 16.6135 3.82883 18.1001 3.83328H21.9001C23.3866 3.82883 24.8136 4.4174 25.8648 5.46857C26.9159 6.51974 27.5045 7.94671 27.5001 9.43328V13.8333C27.5001 17.5152 24.5153 20.4999 20.8334 20.4999ZM18.1001 6.33328C16.388 6.33328 15.0001 7.72119 15.0001 9.43328V13.8333C15.0001 16.1345 16.8655 17.9999 19.1667 17.9999H20.8334C23.1346 17.9999 25 16.1345 25 13.8333V9.43328C25 8.61111 24.6734 7.82261 24.0921 7.24125C23.5107 6.65988 22.7222 6.33328 21.9001 6.33328H18.1001Z"
                      fill="#DBDFE6" />
              </svg>
            </div>
          </div>
          <ul tabindex="0" class=" z-[1] p-2 menu menu-sm dropdown-content custom-layout rounded-box w-52">
            <li>
              <RouterLink to="/profile">Mon profil</RouterLink>
            </li>
            <li>
              <a @click="logout">Se déconnecter</a>
            </li>
          </ul>
        </div>
        <div v-else class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23.8167 23.8334C26.4329 23.8864 28.6494 25.7754 29.1167 28.35L29.5 30.25C29.8787 31.8899 29.5065 33.6132 28.4848 34.9507C27.4632 36.2882 25.8984 37.1006 24.2167 37.1667H8.73337C7.04931 37.1066 5.4806 36.2957 4.45768 34.9565C3.43477 33.6174 3.06507 31.8906 3.45004 30.25L3.83337 28.35C4.29343 25.778 6.50441 23.8878 9.1167 23.8334H23.8167ZM24.2167 34.6667C25.0589 34.6591 25.8512 34.2661 26.3667 33.6C27.0275 32.8025 27.28 31.7432 27.05 30.7334L26.6667 28.8334C26.4314 27.426 25.2423 26.376 23.8167 26.3167H9.1167C7.69489 26.3774 6.51135 27.4286 6.28337 28.8334L5.98337 30.75C5.75889 31.7546 6.01111 32.8065 6.6667 33.6C7.16395 34.2437 7.92063 34.6343 8.73337 34.6667H24.2167Z"
                      fill="#DBDFE6" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.3 20.5H15.6334C11.9515 20.5 8.9667 17.5153 8.9667 13.8334V9.43335C8.9667 6.34056 11.4739 3.83335 14.5667 3.83335H18.3334C19.8257 3.81998 21.2613 4.40461 22.3197 5.45675C23.3781 6.5089 23.9712 7.94097 23.9667 9.43335V13.8334C23.9667 17.5153 20.9819 20.5 17.3 20.5ZM14.5667 6.33335C12.8546 6.33335 11.4667 7.72127 11.4667 9.43335V13.8334C11.4756 16.1179 13.3157 17.9727 15.6 18H17.2667C18.3718 18 19.4316 17.561 20.213 16.7796C20.9944 15.9982 21.4334 14.9384 21.4334 13.8334V9.43335C21.4334 7.72127 20.0455 6.33335 18.3334 6.33335H14.5667Z"
                      fill="#DBDFE6" />
                <path
                  d="M35.6334 10.9167H33.3334V8.63335C33.3334 7.943 32.7737 7.38335 32.0834 7.38335C31.393 7.38335 30.8334 7.943 30.8334 8.63335V10.9167H28.5667C27.8763 10.9167 27.3167 11.4763 27.3167 12.1667C27.3167 12.857 27.8763 13.4167 28.5667 13.4167H30.85V15.7C30.85 16.3904 31.4097 16.95 32.1 16.95C32.7904 16.95 33.35 16.3904 33.35 15.7V13.4167H35.6334C36.3237 13.4167 36.8834 12.857 36.8834 12.1667C36.8834 11.4763 36.3237 10.9167 35.6334 10.9167Z"
                  fill="#DBDFE6" />
              </svg>
            </div>
          </div>
          <ul tabindex="0" class="z-[1] p-2 menu menu-sm dropdown-content custom-layout rounded-box w-52">
            <li>
              <RouterLink to="/register">Créer un compte</RouterLink>
            </li>
            <li>
              <RouterLink to="/login">Se connecter</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>