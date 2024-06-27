<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore.js'
import { formatName } from '@/stores/helpers.js'

const router = useRouter()
const route = useRoute()
const store = useAppStore()
const userStore = useUserStore()

onMounted(() => {
  document.title = `${route.name} - ${store.appName}`
})

const form = ref({
  id: userStore.authUser.id,
  pseudo: userStore.authUser.pseudo,
  first_name: userStore.authUser.first_name,
  last_name: userStore.authUser.last_name,
  email: userStore.authUser.email,
  address: userStore.authUser.address,
  phone_number: userStore.authUser.phone_number,
  image: userStore.authUser.image,
  delivery_address: userStore.authUser.delivery_address,
  password: '',
  password_confirmation: ''
  // newsletter: userStore.authUser.newsletter
})

// const onFileChange = (e) => {
//   form.value.image = e.target.files[0]
// }

const updateForm = () => {
  const formData = { ...form.value }
  if (!formData.password) {
    delete formData.password
    delete formData.password_confirmation
  }
  userStore.updateUser(userStore.authUser.id, formData)
  router.push('/')
}

const deleteUser = () => {
  const confirmation = confirm('Etes-vous sûr de vouloir supprimer votre compte ?')
  if (confirmation) {
    userStore.deleteUser(userStore.authUser.id)
    router.push('/')
  }
}
</script>

<template>
  <div class="flex justify-center py-10">
    <div class="container">
      <h1 class="text-3xl p-5">{{ formatName(userStore.authUser.pseudo) }}</h1>
      <div class="flex justify-center">
        <img class="h-96 p-5" :src="userStore.authUser.image" alt="userpicture" />
      </div>
      <div class="custom">
        <h1 class="text-3xl p-5">Modifier mon compte</h1>
        <div class="h-full">
          <form @submit.prevent="updateForm" class="flex flex-col pl-10 md:grid md:grid-cols-3">
            <div class="col-span-1">
              <div class="flex flex-col">
                <label class="pb-2" for="pseudo">Pseudo:</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="pseudo"
                       v-model="form.pseudo"
                       type="text" required>
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="firstName">Prénom :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2"
                       id="firstName"
                       v-model="form.first_name"
                       type="text" required>
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="lastName">Nom :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="lastName"
                       v-model="form.last_name"
                       type="text" required>
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="email">Email :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="email"
                       v-model="form.email"
                       type="email" required>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex flex-col">
                <label class="pb-2" for="address">Adresse :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="address"
                       v-model="form.address"
                       type="text" required>
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="phoneNumber">Numéro de téléphone :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2"
                       id="phoneNumber"
                       v-model="form.phone_number" type="tel" required>
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="image">Photo :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="image"
                       v-model="form.image"
                       type="text">
              </div>

              <!--          <label class="pb-2" for="image">Photo :</label>-->
              <!--          <input class="mb-5 bg-white border-2 custom-border w-96 rounded-full pl-2" id="image" type="file"-->
              <!--                 @change="onFileChange">-->

              <div class="flex flex-col">
                <label class="pb-2" for="deliveryAddress">Adresse de Livraison :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2"
                       id="deliveryAddress"
                       v-model="form.delivery_address" type="text"
                       required>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex flex-col">
                <label class="pb-2" for="password">Nouveau mot de passe :</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2" id="password"
                       v-model="form.password"
                       type="password" autocomplete="off">
              </div>
              <div class="flex flex-col">
                <label class="pb-2" for="passwordConfirmation">Confirmation du mot de passe:</label>
                <input class="mb-5 bg-white border-2 custom-border w-96 md:w-52 xl:w-96 rounded-full pl-2"
                       id="passwordConfirmation"
                       v-model="form.password_confirmation"
                       type="password">
              </div>
              <!--              <div>-->
              <!--                <label for="newsletter" class="flex items-center">-->
              <!--                  <input class="checkbox checkbox-md custom-border border-2" id="newsletter" type="checkbox"-->
              <!--                         v-model="form.newsletter">-->
              <!--                  <span class="ml-2">J'accepte de recevoir des Newsletter</span>-->
              <!--                </label>-->
              <!--              </div>-->
              <div class="flex md:flex-col md:items-center md:justify-center 2xl:flex-row">
                <button class="btn btn-custom-primary btn-ghost px-12 m-5" type="submit">Update User</button>
                <button class="btn btn-custom-secondary btn-ghost px-12 m-5" @click="deleteUser">Delete User
                </button>
              </div>
            </div>
          </form>
        </div>
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