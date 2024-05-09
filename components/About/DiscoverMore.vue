<template>
  <section class="about_one">
    <div class="container">
      <div class="row">
        <!-- <div class="col-xl-12">
          <div class="about1_img discover">
            <img
              src="/assets/images/resources/AWG.svg"
              alt="discover-1"
              v-if="about.id == 'discover-1'"
            />
          </div>
        </div> -->
        <!-- <div class="col-xl-6 col-lg-6">
          <div class="about1_img">
            <div class="about1_shape_1"></div>
            <img
              :src="`/assets/images/main-slider/${about.image}`"
              alt="About-Img"
            />
            <div class="about1_icon-box">
              <div class="circle">
                <span class="icon-focus"></span>
              </div>
            </div>
          </div>
        </div> -->
        <div :class="about.id == 'discover-1' ? 'col-lg-12' : 'col-xl-7 col-lg-7'">
          <div class="block-title text-left">
            <p v-html="about.text"></p>
            <!-- <h3>We’re leader in agriculture market</h3> -->
            <div class="leaf">
              <img src="/assets/images/resources/leaf.png" alt="" />
            </div>
          </div>
          <div class="about_content">
            <div class="text">
              <p v-html="about.more"></p>
            </div>
          </div>

          <div class="row" v-if="about.id == 'discover-3'">
            <div class="col-lg-12">
              <div
                class="complete_solutions wow animated slideInLeft"
                data-wow-duration="2s"
                data-wow-delay="1s"
              >
                <img
                  src="/assets/images/uniqueness/picture1.png"
                  alt="icon_2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="project_information_box" v-if="about.list">
            <h3>Our streamlined process ensures seamless implementation:</h3>
            <ul class="project_information_list">
              <li v-for="item in about.list" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div v-else-if="about.id == 'discover-2'">
            <video-one
              :image="about.video.image"
              :video="about.video.video"
              :title="about.video.title"
              :desc="about.video.desc"
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
      return this.$store.state.silderList.find(
        (item) => item.id == this.$route.params.id
      );
    },
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
