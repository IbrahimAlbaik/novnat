<template>
  <section class="about_one">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="about1_img discover">
            <img
              src="/assets/images/resources/AWG.svg"
              alt="discover-1"
              v-if="about.id == 'discover-1'"
            />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
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
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="block-title text-left">
            <p v-html="about.text"></p>
            <!-- <h3>We’re leader in agriculture market</h3> -->
            <div class="leaf">
              <img src="/assets/images/resources/leaf.png" alt="" />
            </div>
          </div>
          <div class="about_content">
            <div class="text">
              <p>
                {{ about.more }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

<style scoped></style>
