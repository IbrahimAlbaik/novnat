<template>
  <section class="best_company">
    <div class="container">
      <div class="row" v-if="singlePerson">
        <div class="col-xl-12">
          <div class="block-title text-center">
            <p>the best team</p>
            <h3>We offer best team of Engineering</h3>
            <div class="leaf">
              <img src="/assets/images/resources/leaf.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="company_image">
            <img :src="`/assets/images/team/${singlePerson.image}`" alt="" />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="company_content">
            <div class="block-title text-left">
              <p>{{ singlePerson.name }}</p>
              <div class="leaf">
                <img src="/assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <p v-html="singlePerson.about"></p>
            <!-- <ul class="company_list_box list-unstyled">
              <li>
                <i class="fa fa-check"></i>Every employee wears a photo ID
                badge.
              </li>
              <li>
                <i class="fa fa-check"></i>Mobiles are custom wrapped for easy
                identification.
              </li>
              <li>
                <i class="fa fa-check"></i>We are a fully insured nationally
                ranked brand.
              </li>
              <li>
                <i class="fa fa-check"></i>All work is backed by our exclusive
                “Streak-Free Guarantee”.
              </li>
              <li>
                <i class="fa fa-check"></i>We offer multiple services to
                maintain your home.
              </li>
              <li>
                <i class="fa fa-check"></i>Our services are more affordable than
                you think.
              </li>
            </ul> -->
            <!-- <div class="company_button_box">
              <div class="company_icon">
                <img src="/assets/images/resources/company-icon-1.png" alt="" />
              </div>
              <div class="company_text">
                <p>We Are ISO Certified Company</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "teamDetails",
  props: ["singlePerson"],
  computed: {},
};
</script>

<style scoped></style>
