<template>
  <section class="project_detail" v-if="singleTechnology">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-7">
          <div class="project_detail_image">
            <div class="row">
              <div
                :class="
                  singleTechnology.images.length > 1 ? 'col-lg-6' : 'col-lg-12'
                "
                v-for="image in singleTechnology.images"
                :key="image.id"
              >
                <img :src="image.image_path" :alt="image.id" />
              </div>
            </div>
          </div>
          <div class="project_detail_left_content news_detail_content">
            <div
              class="harvest_innovations_detail"
              v-html="singleTechnology.desc"
            ></div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5">
          <div
            class="project_information_box"
            v-if="singleTechnology.desc_box"
            v-html="singleTechnology.desc_box"
          ></div>
        </div>
      </div>
      <div class="row" v-if="singleTechnology.extra_desc_box">
        <div class="col-lg-8">
          <div
            class="project_information_box"
            v-html="singleTechnology.extra_desc_box"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import MaterialTable from "@/components/Projects/MaterialTable";

export default {
  name: "ProjectDetail",
  props: ["singleTechnology"],
  components: {
    // MaterialTable,
  },
};
</script>

<style scoped></style>
