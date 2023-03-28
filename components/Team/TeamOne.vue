<template>
  <section class="team_one">
    <div class="container">
      <div class="block-title text-center">
        <p>our team members</p>
        <h3>meet the brilliants</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-3 col-md-6"
          v-for="team in teams"
          :key="team.id"
        >
          <div class="team_one_single wow fadeInUp">
            <div class="team_one_image">
              <img
                v-bind:src="`/assets/images/team/${team.image}`"
                alt="team.id"
              />
            </div>
            <div class="team_one_deatils">
              <p>{{ team.position }}</p>
              <h2>
                <nuxt-link :to="`/team/${team.id}`">
                  {{ team.name }}
                </nuxt-link>
              </h2>
              <div class="team_one_social">
                <!-- <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a> -->
                <a href="#"><i class="fab fa-linkedin"></i></a>
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
  name: "TeamOne",
  computed: {
    teams() {
      return this.$store.state.teams;
    },
  },
};
</script>

<style scoped></style>
