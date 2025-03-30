<template>
  <section class="gallery_one" id="gallery">
    <div class="container-fullwidth">
      <div class="block-title text-center">
        <p>our gallery</p>
        <h3>highlights</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="gallery_one_carousel owl-carousel">
        <no-ssr>
          <Swiper
            :space-between="40"
            :autoplay="{ delay: 5000 }"
            :loop="true"
            :slides-per-view="5"
          >
            <SwiperSlide v-for="gallery in galleries" :key="gallery.id">
              <nuxt-link :to="`/gallery/${gallery.id}`">
                <div
                  class="gallery_one_single wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <span>{{ gallery.title }}</span>
                  <div class="gallery_one_image">
                    <img :src="gallery.image" :alt="gallery.title" />
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from "vue";
const { $glightbox } = useNuxtApp();

// Define props for receiving gallery data
const props = defineProps({
  galleries: {
    type: Array,
    required: true,
  },
});

// Reinitialize GLightbox whenever galleries data changes
onMounted(() => {
  const lightbox = $glightbox();
  lightbox.init();
});

// Watch for any updates to the galleries data and reinitialize GLightbox if it changes
watch(
  () => props.galleries,
  (newGalleries) => {
    if (newGalleries.length) {
      const lightbox = $glightbox();
      lightbox.init(); // Reinitialize lightbox when galleries change
    }
  }
);
</script>
<style scoped>
.gallery_one_single span {
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  bottom: 0;
  border-radius: 6px;
  padding: 1rem;
}
</style>
