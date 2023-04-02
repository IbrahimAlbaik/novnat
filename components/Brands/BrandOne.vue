<template>
  <div class="brand-one">
    <div class="container">
      <div class="block-title text-center">
        <p>our target</p>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one-carousel">
            <no-ssr>
              <carousel
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
                <div class="single_brand_item target">
                  <a href="https://sdgs.un.org/goals/goal6" target="_blank"
                    ><img
                      src="/assets/images/resources/target_1.jpg"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item target">
                  <a href="https://sdgs.un.org/goals/goal9" target="_blank"
                    ><img
                      src="/assets/images/resources/target_2.png"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item target">
                  <a href="https://sdgs.un.org/goals/goal13" target="_blank"
                    ><img
                      src="/assets/images/resources/target_3.jpg"
                      alt="brand"
                  /></a>
                </div>
              </carousel>
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
};
</script>

<style scoped></style>
