<template>
  <section class="about_one">
    <div class="container" v-if="about">
      <div class="row">
        <div :class="about.id == '1' ? 'col-lg-12' : 'col-xl-7 col-lg-7'">
          <div class="block-title text-left">
            <p v-html="about.title"></p>
            <div class="leaf">
              <img src="~assets/images/resources/leaf.png" alt="" />
            </div>
          </div>
          <div class="about_content">
            <div class="text">
              <p v-html="about.desc"></p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div
            class="project_information_box"
            v-if="about.extra_desc"
            v-html="about.extra_desc"
          ></div>
          <div>
            <video-one
              v-if="about.youtube_video_url"
              :image="about.cover_youtube_image"
              :video="about.youtube_video_url"
              :title="about.youtube_video_title"
              :desc="about.about_youtube_video"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoOne from "@/components/VideoOne.vue";
export default {
  components: { VideoOne },
  name: "discover",
  computed: {
    about() {
      return this.$store.getters["getLandingPageData"]?.data?.sliders?.find(
        (item) => item.id == this.$route.params.id
      );
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchLandingPageData");
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>

<style scoped>
.complete_solutions img {
  width: 100%;
  height: 100%;
  margin: 2rem 0;
}
</style>
