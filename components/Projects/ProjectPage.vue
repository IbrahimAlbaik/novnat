<template>
  <section class="recent-project our_projects" id="projects">
    <div data-v-3cbd7405="" class="block-title text-center">
      <p data-v-3cbd7405="">What our Technology</p>
      <h3 data-v-3cbd7405="">Technologies We Offer</h3>
      <div data-v-3cbd7405="" class="leaf">
        <img
          data-v-3cbd7405=""
          src="/assets/images/resources/leaf.png"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-6 col-lg-6"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="recent_project_single mrb-30">
            <div class="overlay"></div>
            <div class="project_img_box">
              <img
                :src="`/assets/images/project/${project.images[0]}`"
                alt="Recent Project Img"
              />
              <div class="project_content">
                <h3>{{ project.title }}</h3>
              </div>
              <div class="hover_box">
                <nuxt-link :to="`/technology-details/${project.id}`"
                  ><span class="icon-left-arrow"></span
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-xl-12">
          <div class="our_projects_btn">
            <a href="#" class="thm-btn">Load More Projects</a>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {};
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style scoped></style>
