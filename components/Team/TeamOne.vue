<template>
  <section class="team_one" id="team">
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
          class="col-xl-4 col-lg-4 col-md-6"
          v-for="person in team"
          :key="person.id"
        >
          <div class="team_one_single wow fadeInUp">
            <nuxt-link :to="`/team/${person.id}`">
              <div class="team_one_image">
                <img :src="person.image" :alt="team.id" />
              </div>
            </nuxt-link>
            <div class="team_one_deatils">
              <p>{{ person.position }}</p>
              <h2>
                <a href="#">
                  {{ person.name }}
                </a>
              </h2>
              <div class="team_one_social">
                <a :href="person.linkedin_url" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-title text-center">
        <p>Advisory Team</p>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row" style="justify-content: center">
        <div class="col-xl-8">
          <div class="row">
            <div
              class="col-xl-5 col-lg-5 col-md-6"
              v-for="person in otherTeam"
              :key="person.id"
            >
              <div
                class="team_one_single wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <nuxt-link :to="`/team/${person.id}`">
                  <div class="team_one_image">
                    <img :src="person.image" :alt="person.id" />
                  </div>
                </nuxt-link>
                <div class="team_one_deatils">
                  <p>{{ person.position }}</p>
                  <h2>
                    <a href="#">{{ person.name }}</a>
                  </h2>
                  <div class="team_one_social">
                    <a :href="person.linkedin_url" target="_blank"
                      ><i class="fab fa-linkedin"></i
                    ></a>
                  </div>
                </div>
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
  props: ["teams"],
  computed: {
    team() {
      return this.teams?.filter((team) => team.role == "member");
    },
    otherTeam() {
      return this.teams?.filter((team) => team.role == "adviser");
    },
  },
};
</script>

<style scoped></style>
