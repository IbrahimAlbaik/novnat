<template>
  <section class="video-one" :style="`background-image:url(${image});`">
    <div class="container text-center">
      <a
        :href="video"
        class="video-one__btn videoOne"
        data-src="video"
        data-type="video"
        @click.prevent
        ><i class="fa fa-play"></i
      ></a>
      <p>{{ title }}</p>
      <h3>{{ desc }}</h3>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import { useNuxtApp } from "#app";
export default {
  name: "VideoOne",
  props: ["video", "image", "title", "desc"],
  setup() {
    const { $glightbox } = useNuxtApp();

    onMounted(() => {
      // Initialize GLightbox
      $glightbox({
        selector: ".videoOne", // Define selector for GLightbox
      });
    });
  },
};
</script>

<style scoped>
h3 {
  font-size: 2rem;
}
</style>
