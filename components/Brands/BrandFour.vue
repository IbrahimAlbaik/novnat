<template>
  <div class="brand-one brand-four">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one-carousel owl-carousel">
            <no-ssr>
              <Swiper
                :slides-per-view="4"
                :space-between="50"
                :autoplay="true"
                :dots="true"
                :nav="false"
                :responsive="{
                  0: { items: 1 },
                  640: { items: 2 },
                  992: { items: 3 },
                  1024: { items: 4 },
                }"
              >
                <SwiperSlide v-for="partner in partners" :key="partner.id">
                  <div class="single_brand_item">
                    <a :href="partner.URL" target="_balnk">
                      <img :src="partner.image" alt="brand"
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
  name: "BrandFour",
  props: ["partners"],
};
</script>

<style>
.single_brand_item {
  margin: 0 0.5rem;
}
.single_brand_item a {
  display: inline-block;
  width: 100%;
}
.single_brand_item a img {
  height: 90px;
  object-fit: fill;
  width: 100%;
}
.owl-carousel .owl-stage {
  transition: all 0.25s linear 0s !important;
}
</style>
