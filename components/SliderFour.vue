<template>
  <client-only>
    <section class="banner_four_section" id="home">
      <div
        class="banner-carousel-four owl-theme owl-carousel"
        v-if="sliders && sliders.length"
      >
        <Swiper
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          loop
        >
          <SwiperSlide
            class="slide-item"
            v-for="slider in sliders"
            :key="slider.id"
          >
            <div
              v-if="mediaType === 'image'"
              class="image-layer"
              :style="`background-image: url(${slider.media})`"
            ></div>
            <video
              v-else-if="mediaType === 'video'"
              autoplay
              muted
              loop
              id="myVideo"
              style="
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
              "
            >
              <source :src="slider.media" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1 v-html="slider.title"></h1>
                    <div class="link-box">
                      <nuxt-link
                        :to="`/discover-more/${slider.id}`"
                        class="thm-btn"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </client-only>
</template>

<script>
import { computed, watch } from "vue";

export default {
  name: "SliderFour",
  props: ["sliders"],
  setup(props) {
    // Compute the media type for the first slider for the demo
    const mediaType = computed(() => {
      return props.sliders && props.sliders.length
        ? checkMediaTypeFromUrl(props.sliders[0].media)
        : null;
    });

    function checkMediaTypeFromUrl(url) {
      if (url) {
        const fileExtension = getFileExtension(url);
        if (isImageFile(fileExtension)) {
          return "image";
        } else if (isVideoFile(fileExtension)) {
          return "video";
        }
      }
      return null; // Return null for unsupported media types
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

    return {
      mediaType,
      checkMediaTypeFromUrl,
    };
  },
};
</script>

<style scoped>
iframe {
  background: #ccc;
}
iframe div,
iframe span {
  width: 100%;
}
.swiper-pagination {
  position: absolute;
  right: 10px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column; /* Align dots vertically */
}
.swiper-pagination-bullet {
  background: #fff; /* Color of pagination bullets */
  opacity: 0.5; /* Default opacity */
  margin: 4px 0; /* Space between bullets */
}
.swiper-pagination-bullet-active {
  opacity: 1; /* Active bullet opacity */
}
</style>
