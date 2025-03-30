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
      <div class="gallery_one_carousel">
        <client-only>
          <Swiper
            :modules="modules"
            :space-between="20"
            :autoplay="{ delay: 1000, disableOnInteraction: false }"
            :loop="isMobile"
            :breakpoints="breakpoints"
            :pagination="{ 
              clickable: true,
              el: '.swiper-pagination',
              dynamicBullets: true
            }"
          >
            <SwiperSlide v-for="gallery in galleries" :key="gallery.id">
              <nuxt-link :to="`/gallery/${gallery.id}`" class="gallery-link">
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
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const { $glightbox } = useNuxtApp();
const isMobile = ref(false);
const modules = [Autoplay, Pagination, Navigation];

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

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

  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 768; // Changed to 768px breakpoint for mobile

    // Update responsive settings on resize
    const updateSize = () => {
      isMobile.value = window.innerWidth < 768;
    };

    window.addEventListener("resize", updateSize);

    // Clean up the event listener on component unmount
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateSize);
    });
  }
});

// Watch for any updates to the galleries data and reinitialize GLightbox if it changes
watch(
  () => props.galleries,
  (newGalleries) => {
    if (newGalleries.length) {
      const lightbox = $glightbox();
      lightbox.init();
    }
  }
);
</script>

<style scoped>
.gallery_one {
  padding: 60px 0;
  overflow: hidden;
}

.gallery_one_carousel {
  padding: 0 15px;
}

.gallery_one_single {
  position: relative;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  height: 0;
  padding-bottom: 75%; /* 4:3 Aspect ratio */
}

.gallery_one_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery_one_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery_one_single:hover .gallery_one_image img {
  transform: scale(1.1);
}

.gallery_one_single span {
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

:deep(.swiper) {
  padding: 10px;
}

:deep(.swiper-pagination) {
  position: relative;
  margin-top: 20px;
  display: none; /* Hide pagination by default */
}

@media (max-width: 768px) {
  :deep(.swiper-pagination) {
    display: block; /* Show pagination only on mobile */
  }
  
  :deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #5a8b50;
    transform: scale(1.2);
  }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .gallery_one_single span {
    font-size: 15px;
    padding: 10px;
  }
}

@media (max-width: 992px) {
  .gallery_one {
    padding: 40px 0;
  }

  .gallery_one_carousel {
    padding: 0 10px;
  }

  .gallery_one_single span {
    font-size: 14px;
    padding: 8px;
  }
}

@media (max-width: 576px) {
  .gallery_one {
    padding: 20px 0;
  }

  .gallery_one_carousel {
    padding: 0 5px;
  }

  .gallery_one_single {
    margin: 3px;
  }

  .gallery_one_single span {
    font-size: 12px;
    padding: 6px;
  }
}
</style>
