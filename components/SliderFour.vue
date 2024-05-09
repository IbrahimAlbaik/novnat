<template>
  <section class="banner_four_section" id="home">
    <div class="banner-carousel-four owl-theme owl-carousel">
      <no-ssr>
        <carousel
          :items="1"
          :autoplay="true"
          :nav="false"
          autoplaySpeed="2000ms"
        >
          <!-- Slide Item -->
          <div class="slide-item" v-for="item in silderList" :key="item.id">
            <div
              class="image-layer"
              :style="`background-image: url(/assets/images/main-slider/${item.image})`"
            ></div>
            <video
              v-if="item.id == 'discover-1'"
              width="100%"
              height="100%"
              controls
              autoplay
              controlsList="nodownload"
              oncontextmenu="return false;"
              muted
              loop
              style="
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
              "
            >
              <source
                src="/assets/images/main-slider/about_slider_1.mov"
                type="video/mov"
              />
              <source
                src="/assets/images/main-slider/about_slider_1.mp4"
                type="video/mp4"
              />
            </video>
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1 v-html="item.text"></h1>
                    <div class="link-box">
                      <nuxt-link
                        :to="`/discover-more/${item.id}`"
                        class="thm-btn"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderFour",
  data() {
    return {};
  },
  computed: {
    silderList() {
      return this.$store.state.silderList;
    },
  },
};
</script>

<style scoped></style>
