<template>
  <section class="gallery_two">
    <div class="container">
      <h3 data-v-3cbd7405="">{{ gallery.title }}</h3>
      <div data-v-3cbd7405="" class="leaf">
        <img
          data-v-3cbd7405=""
          src="/assets/images/resources/leaf.png"
          alt="icon"
        />
      </div>
      <p>{{ gallery.description }}</p>

      <div
        class="row masonary-layout"
        style="position: relative; height: 1200px"
      >
        <div
          class="col-xl-4 col-lg-6 col-md-6 masonary-item"
          :style="`position: absolute; left: ${
            index == 0
              ? '0'
              : index == 1
              ? '400'
              : index == 2
              ? '800'
              : index == 3
              ? '0'
              : index == 4
              ? '800'
              : index == 5
              ? '0'
              : index == 6
              ? '400'
              : '0'
          }px; top: ${
            index == 0
              ? '0'
              : index == 1
              ? '0'
              : index == 2
              ? '0'
              : index == 3
              ? '280'
              : index == 4
              ? '280'
              : index == 5
              ? '731'
              : index == 6
              ? '731'
              : '1000'
          }px`"
          v-for="(image, index) in gallery.images"
          :key="image"
        >
          <div class="gallery_two_single">
            <div class="gallery_two_image">
              <img :src="`/assets/images/gallery/${image}`" alt="" />
              <div class="gallery_two_hover_box">
                <div class="gallery_two_icon">
                  <a class="img-popup" :href="`/assets/images/gallery/${image}`"
                    ><span class="icon-plus-symbol"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  mounted() {
    new GLightbox({
      selector: ".img-popup",
    });
  },
  computed: {
    gallery() {
      return this.$store.state.gallery.find(
        (item) => item.id == this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
.col-xl-4:nth-of-type(1) .gallery_two_single {
  height: 250px;
}
.col-xl-4:nth-of-type(2) .gallery_two_single {
  height: 701px;
}
.col-xl-4:nth-of-type(3) .gallery_two_single {
  height: 250px;
}
.col-xl-4:nth-of-type(4) .gallery_two_single {
  height: 421px;
}
.col-xl-4:nth-of-type(5) .gallery_two_single {
  height: 701px;
}
.col-xl-4:nth-of-type(6) .gallery_two_single {
  height: 250px;
}
.col-xl-4:nth-of-type(7) .gallery_two_single {
  height: 250px;
}
.col-xl-4:nth-of-type(8) .gallery_two_single {
  height: 250px;
}
.col-xl-4:nth-of-type(9) .gallery_two_single {
  height: 250px;
}
.gallery_two_single img {
  height: 100%;
  object-fit: cover;
}
.gallery_two_single .gallery_two_image {
  height: 100%;
}
@media only screen and (max-width: 767px) {
  .masonary-layout {
    height: auto !important;
  }
  .col-xl-4 {
    position: unset !important;
  }
  .col-xl-4 .gallery_two_single {
    height: 250px !important;
  }
}
</style>
