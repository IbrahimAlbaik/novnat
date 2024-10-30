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
            <img :src="singlePerson.image" :alt="singlePerson.name" />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="company_content">
            <div class="block-title text-left">
              <p>{{ singlePerson.name }} / {{ singlePerson.position }}</p>

              <div class="leaf">
                <img src="/assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <p v-html="singlePerson.bio"></p>
            <p v-if="singlePerson.provide">{{ singlePerson.provide }}</p>
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
