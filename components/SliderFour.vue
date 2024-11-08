<template>
  <client-only>
    <section class="banner_four_section" id="home">
      <div class="swiper-wrapper" v-if="sliders && sliders.length">
        <Swiper
          :autoplay="{ delay: 5000, disableOnInteraction: true }"
          :modules="[Autoplay, Pagination, Navigation]"
          loop
          :pagination="{ clickable: true }"
          ref="swiper"
        >
          <SwiperSlide
            class="swiper-wrapper-slider"
            v-for="slider in sliders"
            :key="slider.id"
          >
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1 v-html="slider.title"></h1>
                    <div class="link-box">
                      <nuxt-link
                        :to="`/discover-more/${slider.id}`"
                        class="thm-btn link-full-width"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="mediaType(slider.media) === 'image'"
              class="image-layer"
              :style="`background-image: url(${slider.media});`"
            ></div>
            <video
              v-else-if="mediaType(slider.media) === 'video'"
              autoplay
              muted
              loop
              id="myVideo"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
            >
              <source :src="slider.media" type="video/mp4" />
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

<style>
.swiper-pagination {
  position: absolute;
  right: 10px; /* Adjust as needed */
  top: 70%;
  left: 13rem !important;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column; /* Align dots vertically */
}
.swiper-pagination-bullet {
  background: #fff; /* Color of pagination bullets */
  opacity: 0.5; /* Default opacity */
  margin: 4px !important; /* Space between bullets */
}
.swiper-pagination-bullet-active {
  opacity: 1; /* Active bullet opacity */
}
</style>
