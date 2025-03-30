<template>
  <client-only>
    <section class="banner_four_section" id="home">
      <div class="swiper-wrapper">
        <div v-if="!sliders || sliders.length === 0" class="loading-state">
          <div class="loading-content">
            <div class="spinner">
              <div class="spinner-inner"></div>
            </div>
          </div>
        </div>
        <Swiper
          v-else
          :autoplay="{ delay: 5000, disableOnInteraction: true }"
          :modules="[Autoplay, Pagination, Navigation]"
          loop
          :pagination="{ clickable: true }"
          ref="swiper"
        >
          <SwiperSlide
            class="swiper-wrapper-slider"
            v-for="slider in sliders"
            :key="slider?.id"
          >
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1 v-html="slider?.title"></h1>
                    <div class="link-box">
                      <nuxt-link
                        :to="`/discover-more/${slider?.id}`"
                        class="thm-btn link-full-width"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="mediaType(slider?.media) === 'image'"
              class="image-layer"
              :style="`background-image: url(${slider?.media});`"
            ></div>
            <video
              v-else-if="mediaType(slider?.media) === 'video'"
              autoplay
              muted
              loop
              id="myVideo"
              class="video-layer"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
            >
              <source :src="slider?.media" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </client-only>
</template>

<script>
import { Autoplay, Pagination, Navigation } from "swiper"; // Import necessary modules
import { nextTick, onMounted } from "vue"; // Import Vue's nextTick and onMounted

export default {
  name: "SliderFour",
  props: ["sliders"],
  setup(props) {
    function mediaType(url) {
      return url ? checkMediaTypeFromUrl(url) : null;
    }

    function checkMediaTypeFromUrl(url) {
      if (url) {
        const fileExtension = getFileExtension(url);
        if (isImageFile(fileExtension)) {
          return "image";
        } else if (isVideoFile(fileExtension)) {
          return "video";
        }
      }
      return null;
    }

    function getFileExtension(url) {
      return url.split(".").pop().toLowerCase().split("?")[0]; // Get the extension, ignoring query params if any
    }

    function isImageFile(extension) {
      const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "webp",
      ];
      return imageExtensions.includes(extension);
    }

    function isVideoFile(extension) {
      const videoExtensions = ["mp4", "webm", "ogg", "avi", "mkv", "mov"];
      return videoExtensions.includes(extension);
    }

    const swiperRef = ref(null); // Create a ref for the Swiper instance

    onMounted(() => {
      nextTick(() => {
        const swiperInstance = swiperRef.value.swiper;
        if (swiperInstance) {
          swiperInstance.update(); // Manually trigger update to ensure slides are properly initialized
        }
      });
    });

    return {
      swiperRef,
      mediaType,
      checkMediaTypeFromUrl,
      Autoplay,
      Pagination,
      Navigation,
    };
  },
};
</script>

<style scoped>
.banner_four_section {
  position: relative;
  height: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
  min-height: 700px; /* Ensure minimum height is maintained */
}

.loading-state {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.loading-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.spinner {
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-inner {
  width: 100%;
  height: 100%;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.swiper-wrapper {
  height: 100% !important;
  min-height: 700px !important;
}

.swiper-wrapper-slider {
  position: relative;
  height: 100%;
}

.swiper-wrapper-slider:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content-box {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.content {
  position: relative;
  z-index: 10;
  width: 100%;
}

.inner {
  position: relative;
  z-index: 10;
}

.link-box {
  position: relative;
  z-index: 10;
}

.thm-btn {
  position: relative;
  z-index: 10;
}

.image-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: 0;
}

.video-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.swiper-pagination {
  position: absolute;
  right: 10px;
  top: 70%;
  left: 13rem !important;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
  margin: 4px !important;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
