<template>
  <section class="project_detail">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-7">
          <div class="project_detail_image">
            <div class="row" v-if="!singleProject.title.includes('MOF')">
              <div
                :class="
                  singleProject.images.length > 1 ? 'col-lg-6' : 'col-lg-12'
                "
                v-for="image in singleProject.images"
                :key="image"
              >
                <img :src="`/assets/images/project/${image}`" alt="" />
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-lg-12">
                <img
                  :src="`/assets/images/project/${singleProject.images[0]}`"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="project_detail_left_content news_detail_content">
            <div class="harvest_innovations_detail">
              <h2>{{ singleProject.title }}</h2>
              <p v-html="singleProject.description"></p>
            </div>
            <div class="project_detail_image more" v-if="singleProject.id == 2">
              <img
                src="/assets/images/project/Large_scale.png"
                :alt="singleProject.title"
              />
            </div>
            <!-- <div
              class="project_challenges"
              v-if="singleProject.challenges.length"
            >
              <h2>Technology challenges</h2>
              <ul class="list-unstyled project_challenges_box">
                <li
                  v-for="challenge in singleProject.challenges"
                  :key="challenge.id"
                >
                  <div class="project_challenges_icon">
                    <span class="icon-growth"></span>
                  </div>
                  <div class="project_challenges_content">
                    <h4>{{ challenge.title }}</h4>
                    <p>{{ challenge.description }}</p>
                  </div>
                </li>
              </ul>
            </div> -->
            <div
              class="project_detail_image more"
              v-if="singleProject.title.includes('MOF')"
            >
              <img src="/assets/images/project/mof_charts.jpg" alt="charts" />
            </div>
          </div>
          <!-- here will put the charts -->
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5">
          <div
            class="project_information_box"
            v-if="singleProject.specifications.length"
          >
            <h3>{{ singleProject.title }} specifications:</h3>
            <ul class="project_information_list">
              <li
                v-for="specification in singleProject.specifications"
                :key="specification"
              >
                <p v-html="specification"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <MaterialTable v-if="singleProject.title.includes('MOF')" />
        </div>
      </div>
      <div class="row" v-if="singleProject.title.includes('MOF')">
        <div class="col-lg-8">
          <div class="project_information_box">
            <h3>Our MOF-System integration:</h3>
            <p>
              Form factor/ shaping is a persistent major challenge in
              commercialising MOFs. NovNat has two ground-breaking form factors:
            </p>
            <ul class="project_information_list sidebar__post-list">
              <li>
                <div>
                  <h4>MOF ink</h4>
                  <p>
                    Introducing MOF ink, a game-changing method for shaping MOF
                    materials. By creating a specialized MOF slurry, this
                    innovative approach allows for coating intricate heat
                    exchanger geometries while maintaining exceptional material
                    performance. Unlike traditional methods that often result in
                    up to 50% loss of material performance, MOF ink ensures
                    mechanical stability throughout the coating process,
                    guaranteeing optimal performance retention.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Intrinsic matrix</h4>
                  <p>
                    Leveraging the ultra-high density of MOF to produce a
                    flake-shaped structure that offers exceptional mechanical
                    stability without compromising material performance. This
                    intrinsic shaping factor is particularly crucial for
                    applications where coating is unnecessary, ensuring
                    sustained performance integrity.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div>
            <p>
              These shaping factors revolutionize MOF integration into diverse
              adsorption systems, making significant strides in the field. Their
              versatility is game-changing, allowing seamless application across
              various uses and offering potential enhancements for existing
              adsorbent materials.
            </p>
            <div class="project_detail_image no-border">
              <div class="row">
                <div
                  class="col-md-6"
                  v-for="image in singleProject.images"
                  :key="image"
                >
                  <img :src="`/assets/images/project/${image}`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <li>
        <div class="project_challenges_icon">
          <span class="icon-temperature"></span>
        </div>
        <div class="project_challenges_content">
          <h4>Attract and retain quality high paying customers</h4>
          <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
            enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
        </div>
      </li> -->
  <!-- <div class="project_detail_last_text">
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit
                amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries. </p>
            </div> -->
  <!-- <div class="col-xl-4 col-lg-5">
          <div class="project_information_box">
            <h3>Project information</h3>
            <ul class="project_information_list list-unstyled">
              <li><span>Date:</span>06 Nov, 2019</li>
              <li><span>Client:</span>Themeforest, Envato</li>
              <li><span>Website:</span>agrikol.com</li>
              <li><span>Location:</span>New York, USA</li>
              <li><span>Value:</span>$25,60000</li>
            </ul>
            <div class="project_information__social">
              <a href="#"><i class="fab fa-facebook-square"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div> -->
</template>

<script>
import MaterialTable from "@/components/Projects/MaterialTable";

export default {
  name: "ProjectDetail",
  props: ["singleProject"],
  components: {
    MaterialTable,
  },
};
</script>

<style scoped></style>
