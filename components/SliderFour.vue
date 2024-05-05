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
            <!-- <video autoplay muted loop id="myVideo">
              <source src="assets/images/main-slider/1.mov" type="video/mov" />
              Your browser does not support HTML5 video.
            </video> -->
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
