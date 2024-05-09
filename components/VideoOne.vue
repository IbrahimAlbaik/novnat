<template>
  <section
    class="video-one"
    :style="`background-image:url(/assets/images/about/${image});`"
  >
    <div class="container text-center">
      <a :href="`${video}`" class="video-one__btn videoOne"
        ><i class="fa fa-play"></i
      ></a>
      <p>{{ title }}</p>
      <h3>{{ desc }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoOne",
  props: ["video", "image", "title", "desc"],
  mounted() {
    new GLightbox({
      selector: ".videoOne",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped>
h3 {
  font-size: 61px;
}
</style>
