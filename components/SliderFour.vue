<template>
  <section class="banner_four_section" id="home">
    <div class="banner-carousel-four owl-theme owl-carousel">
      <no-ssr>
        <carousel
          :items="1"
          :autoplay="true"
          :nav="false"
          autoplaySpeed="10000ms"
        >
          <!-- Slide Item -->
          <div class="slide-item" v-for="item in silderList" :key="item.id">
            <div
              class="image-layer"
              :style="`background-image: url(/assets/images/main-slider/${item.image})`"
            ></div>
            <iframe
              v-if="item.id == 'discover-1'"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sxhsLQK6s00?si=Ym-X5KJdijhZoKDJ&playlist=sxhsLQK6s00&autoplay=1&mute=1&loop=1&modestbranding=1&autohide=1&showinfo=0"
              style="
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
              "
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              allowfullscreen="allowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen"
            ></iframe>
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

<style scoped>
iframe {
  background: #ccc;
}
iframe div,
iframe span {
  width: 100%;
}
</style>
