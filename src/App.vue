<script setup>
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer>
    <Banner />
    <Footer />
  </footer>

</template>
