<template>
  <section class="details_one">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-4" v-for="(feature, index) in features" :key="feature.id">
          <div class="details_one_single wow fadeInUp" data-wow-delay="300ms">
            <div class="details_one_icon">
              <font-awesome-icon :icon="feature.icon" size="lg" />
            </div>
            <div class="details_one_content">
              <h2>{{feature.title}}</br></h2>
            </div>
            <div class="details_one_count_box">
              <h3>0{{index+1}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailsOne",
  props: ['features']
};
</script>

<style scoped></style>
