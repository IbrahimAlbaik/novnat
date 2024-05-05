<template>
  <section class="service_four uniqueness" id="uniqueness">
    <div class="container">
      <div class="service_four_top"></div>
      <div class="block-title text-center">
        <p>What distinguishes us</p>
        <h3>Our Complete technology solution</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="icon" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="complete_solutions wow animated slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
            <img src="/assets/images/uniqueness/picture1.png" alt="icon_2" />
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div
          class="col-xl-4 col-lg-4"
          v-for="(unique, index) in uniqueness"
          :key="unique.id"
        >
          <div
            class="service_four_single uniqueness_card wow fadeInLeft"
            :class="
              index == 2
                ? 'three'
                : index == 4 || index == 5
                ? 'left'
                : index == 3
                ? 'last'
                : ''
            "
            data-wow-delay="300ms"
            data-wow-offset="1500"
          >
            <div class="uniqueness_content">
              <div class="eco_friendly_content">
                <div class="eco_friendly_icon_box">
                  <img
                    :src="`/assets/images/uniqueness/${unique.icon}`"
                    :alt="unique.id"
                  />
                </div>
              </div>
              <div class="service_four_deatils">
                <h3>
                  {{ unique.title }}
                </h3>
                <p>
                  {{ unique.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Uniqueness",
  data() {
    return {
      uniqueness: [
        {
          id: "unique-1",
          title: "create MOF chemistry",
          description:
            "We create our own MOFs through high throughput experimentation in lab. We only create MOFs that are; green synthesised, cost effective, scalable, stable and enviromentlly friendly",
          icon: "1.svg",
        },
        {
          id: "unique-2",
          title: "Tune and enhance MOFs properties",
          description:
            "Tuning the functionality, pore size distribution, porosity, and molecules adsorption selectivity.",
          icon: "2.svg",
        },
        {
          id: "unique-3",
          title: "MOF formulation",
          description:
            "Applying MOF powder onto heat exchangers to maximise the performance of these materials through MOF ink-solution forms like paints maintaining the porosity and increasing the adsorption kinetics.",
          icon: "3.svg",
        },
        {
          id: "unique-6",
          title: "System construction and testing",
          description:
            "We follow the system development from the early stage of validation until reaching to the actual system that proven in operational environment and ready for commercialization",
          icon: "6.svg",
        },
        {
          id: "unique-5",
          title: "P&ID and CAD drawing for construction",
          description:
            "detailed process and instumentaion diagram followed by a 3D CAD drawing to effectively design the system for assembly and disassembly",
          icon: "5.svg",
        },
        {
          id: "unique-4",
          title: "MOF-based system design and integration.",
          description:
            "Studying the system configuration, heat and mass transfer through the adsorbent material, and optimizing the system to obtain high productivity with low energy consumption and provide high quality product that can compete with other technologies.",
          icon: "4.svg",
        },
      ],
    };
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
  },
};
</script>

<style scoped>
.complete_solutions img {
  width: 100%;
  height: 100%;
}
</style>
