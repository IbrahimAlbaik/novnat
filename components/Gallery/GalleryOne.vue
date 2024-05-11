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
          <carousel
            :margin="30"
            :autoplay="true"
            :dots="false"
            :nav="false"
            :responsive="{
              0: { items: 1 },
              640: { items: 2 },
              992: { items: 3 },
              1024: { items: 5 },
            }"
          >
            <nuxt-link
              v-for="item in gallery"
              :key="item.id"
              :to="`/gallery/${item.id}`"
            >
              <div
                class="gallery_one_single wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <span>{{ item.title }}</span>
                <div class="gallery_one_image">
                  <img
                    :src="`/assets/images/gallery/${item.images[0]}`"
                    alt=""
                  />
                </div>
              </div>
            </nuxt-link>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GalleryOne",
  mounted() {
    new GLightbox({
      selector: ".glightbox",
    });
  },
  computed: {
    gallery() {
      return this.$store.state.gallery;
    },
  },
};
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
