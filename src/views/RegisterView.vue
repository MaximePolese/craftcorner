<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore.js'

const router = useRouter()
const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const form = ref({
  pseudo: '',
  first_name: '',
  last_name: '',
  email: '',
  address: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
  image: '',
  delivery_address: ''
  // rgpd: false,
  // newsletter: false
})

// const onFileChange = (e) => {
//   form.value.image = e.target.files[0]
// }

const submitForm = () => {
  userStore.newUser(form.value)
  router.push('/')
}
</script>

<template>
  <div class="flex justify-center py-10">
    <div class="container custom">
      <h1 class="text-3xl p-5">Créer un compte</h1>
      <div class="flex flex-col justify-between h-full">
        <form @submit.prevent="submitForm" class="flex flex-col pl-10">
          <label class="pb-2" for="pseudo">Pseudo:</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="pseudo" v-model="form.pseudo"
                 type="text" required>

          <label class="pb-2" for="firstName">Prénom :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="firstName"
                 v-model="form.first_name"
                 type="text" required>

          <label class="pb-2" for="lastName">Nom :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="lastName"
                 v-model="form.last_name"
                 type="text" required>

          <label class="pb-2" for="email">Email :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="email" v-model="form.email"
                 type="email" autocomplete="off" required>

          <label class="pb-2" for="address">Adresse :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="address" v-model="form.address"
                 type="text">

          <label class="pb-2" for="phoneNumber">Numéro de téléphone :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="phoneNumber"
                 v-model="form.phone_number" type="tel" required>

          <label class="pb-2" for="image">Photo :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="image" v-model="form.image"
                 type="text">

          <!--          <label class="pb-2" for="image">Photo :</label>-->
          <!--          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="image" type="file"-->
          <!--                 @change="onFileChange">-->

          <label class="pb-2" for="deliveryAddress">Adresse de Livraison :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="deliveryAddress"
                 v-model="form.delivery_address" type="text"
                 required>

          <label class="pb-2" for="password">Mot de passe :</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="password"
                 v-model="form.password"
                 type="password" autocomplete="off" required>

          <label class="pb-2" for="passwordConfirmation">Confirmation du mot de passe:</label>
          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="passwordConfirmation"
                 v-model="form.password_confirmation"
                 type="password" required>

          <!--          <label for="rgpd" class="flex items-center">-->
          <!--            <input class="checkbox checkbox-md custom-border border-2" id="rgpd" type="checkbox" v-model="form.rgpd"-->
          <!--                   required>-->
          <!--            <span class="ml-2">Je donne mon accord pour la collecte des données RGPD</span>-->
          <!--          </label>-->

          <!--          <label for="newsletter" class="flex items-center">-->
          <!--            <input class="checkbox checkbox-md custom-border border-2" id="newsletter" type="checkbox"-->
          <!--                   v-model="form.newsletter">-->
          <!--            <span class="ml-2">J'accepte de recevoir des Newsletter</span>-->
          <!--          </label>-->
          <button class="btn btn-custom-primary btn-ghost px-20 m-5 self-end" type="submit">Valider</button>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom {
  border-color: var(--vt-c-platinum);
  background-color: var(--vt-c-snow);
  color: var(--vt-c-darkpurple);
  border-width: 2px;
  border-radius: var(--rounded-box, 1rem);
}
</style>