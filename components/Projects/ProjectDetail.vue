<template>
  <section class="project_detail">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="project_detail_image">
            <img
              :src="`/assets/images/project/${singleProject.image}`"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <div class="project_detail_left_content">
            <div class="harvest_innovations_detail">
              <h2>{{ singleProject.title }}</h2>
              <p>{{ singleProject.description }}</p>
            </div>
            <div class="project_detail_image" v-if="singleProject.id == 2">
              <img src="/assets/images/resources/AWG.svg" alt="" />
            </div>
            <div
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
              </ul>
            </div>
            <!-- <div class="project_detail_last_text">
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit
                amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries. </p>
            </div> -->
          </div>
        </div>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: ["singleProject"],
};
</script>

<style scoped></style>
