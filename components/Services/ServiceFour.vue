<template>
  <section class="service_four">
    <div class="container">
      <div class="service_four_top"></div>
      <div class="block-title text-center">
        <p>What we do</p>
        <h3>Services We Offer</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-6 col-lg-6"
          v-for="service in this.services"
          :key="service.id"
        >
          <div
            class="service_four_single wow fadeInLeft"
            data-wow-delay="300ms"
            data-wow-offset="1500"
          >
            <div class="service_four_icon">
              <span :class="service.icon"></span>
            </div>
            <div class="service_four_deatils">
              <h3>
                <nuxt-link :to="'/service-detail/'+ service.id" class="service_four_title">{{
                  service.title
                }}</nuxt-link>
              </h3>
              <p>
                {{ service.desc }}
              </p>
            </div>
            <div class="service_four_read_more">
              <nuxt-link :to="`/service-detail/${service.id}`"
                ><span class="icon-left-arrow"></span
              ></nuxt-link>
            </div>
          </div>
        </div>
        <!-- <div class="col-xl-4 col-lg-4">
          <div
            class="service_four_single wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div class="service_four_icon">
              <span class="icon-temperature"></span>
            </div>
            <div class="service_four_deatils">
              <h3>
                <nuxt-link to="/service-detail" class="service_four_title"
                  >Engineering consultant</nuxt-link
                >
              </h3>
              <p>
                Computational Fluid dynamic (CFD) modelling for Multiphysics
                problem.
              </p>
            </div>
            <div class="service_four_read_more">
              <nuxt-link to="/service-detail"
                ><span class="icon-left-arrow"></span
              ></nuxt-link>
            </div>
          </div>
        </div> -->
        <!-- <div class="col-xl-4 col-lg-4">
          <div
            class="service_four_single wow fadeInLeft"
            data-wow-delay="600ms"
          >
            <div class="service_four_icon">
              <span class="icon-harvest"></span>
            </div>
            <div class="service_four_deatils">
              <h3>
                <nuxt-link to="/service-detail" class="service_four_title"
                  >Porous material consultant</nuxt-link
                >
              </h3>
              <p>
                We synthesise MOFs at the highest quality for your specific
                application.
              </p>
            </div>
            <div class="service_four_read_more">
              <nuxt-link to="/service-detail"
                ><span class="icon-left-arrow"></span
              ></nuxt-link>
            </div>
          </div>
        </div> -->
        <!-- <div class="col-xl-4 col-lg-4">
          <div class="service_four_single wow fadeInLeft" data-wow-delay="900ms">
            <div class="service_four_icon">
              <span class="icon-growth"></span>
            </div>
            <div class="service_four_deatils">
              <h3><nuxt-link to="/service-detail" class="service_four_title">organic products</nuxt-link></h3>
              <p>There are many variations of passages of available, but the majority have suffered.
              </p>
            </div>
            <div class="service_four_read_more">
              <nuxt-link to="/service-detail"><span class="icon-left-arrow"></span></nuxt-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceFour",
  data() {
    return {};
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
  },
};
</script>

<style scoped></style>
