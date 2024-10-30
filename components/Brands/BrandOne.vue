<template>
  <div class="brand-one">
    <div class="container">
      <div class="block-title text-center">
        <p>Working towards UN’s Sustainable Development Goals</p>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one-carousel">
            <no-ssr>
              <Swiper
                :slides-per-view="3"
                :space-between="10"
                :autoplay="true"
                :dots="false"
                :nav="false"
                :responsive="{
                  0: { items: 1 },
                  640: { items: 2 },
                  992: { items: 3 },
                  1024: { items: 3 },
                }"
              >
                <SwiperSlide v-for="goal in goals" :key="goal.id">
                  <div class="single_brand_item target">
                    <a :href="goal.URL" target="_blank"
                      ><img :src="goal.image" alt="brand"
                    /></a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandOne",
  props: ["goals"],
};
</script>

<style scoped></style>
