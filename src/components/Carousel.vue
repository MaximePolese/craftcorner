<script setup>
import { ref } from 'vue'

const images = [
  '/src/components/img/image2.png',
  '/src/components/img/image3.png',
  '/src/components/img/image1.png'
]

const currentImage = ref(images[0])
// TODO: fix the carousel
const changeImage = (index) => {
  console.log('Changing image to index:', index)
  currentImage.value = images[index]
  console.log('Current image:', currentImage.value)
}
</script>

<template>
  <div class="carousel w-full">
    <div class="carousel-item relative w-full ">
      <img :src="currentImage" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button class="btn btn-circle"
                @click="changeImage((images.indexOf(currentImage.value) - 1 + images.length) % images.length)">❮
        </button>
        <button class="btn btn-circle" @click="changeImage((images.indexOf(currentImage.value) + 1) % images.length)">
          ❯
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>