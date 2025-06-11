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
          v-for="technology in technologies"
          :key="technology.id"
        >
          <div class="recent_project_single mrb-30 wow fadeInUp">
            <div class="overlay"></div>
            <div class="project_img_box">
              <img :src="technology.image" alt="Recent Project Img" />
              <div class="project_content">
                <h3>{{ technology.title }}</h3>
              </div>
              <div class="hover_box">
                <nuxt-link :to="`/technology-details/${technology.id}`"
                  ><span class="icon-left-arrow"></span
                ></nuxt-link>
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
  name: "ProjectPage",
  props: ["technologies"],
};
</script>
