<template>
  <div class="brand-one brand-four">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one-carousel owl-carousel">
            <no-ssr>
              <carousel
                :autoplay="true"
                :dots="false"
                :nav="false"
                :responsive="{
                  0: { items: 1 },
                  640: { items: 2 },
                  992: { items: 3 },
                  1024: { items: 5 },
                }"
              >
                <div class="single_brand_item">
                  <a href="https://www.gbslepgrowthhub.co.uk/programmes/amtecaa"
                    ><img
                      src="/assets/images/partners/amtecaa.png"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item">
                  <a href="https://www.birmingham.ac.uk/research/energy/climate-innovation-platform.aspx"
                    ><img
                      src="/assets/images/partners/climate.png"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item">
                  <a href="https://www.birmingham.ac.uk/index.aspx"
                    >
                    <!-- incubated by: -->
                    <img
                      src="/assets/images/partners/university.jpg"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item">
                  <a href="https://intranet.birmingham.ac.uk/as/employability/b-enterprising/uobelevate/index.aspx"
                    >
                    <!-- incubated by: -->
                    <img
                      src="/assets/images/partners/UOB.png"
                      alt="brand"
                  /></a>
                </div>
                <div class="single_brand_item">
                  <a href="https://ec.europa.eu/regional_policy/funding/erdf_en"
                    ><img
                      src="/assets/images/partners/union.jpg"
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
  name: "BrandFour",
};
</script>

<style scoped>
.single_brand_item {
  margin: 0 0.5rem;
}
.single_brand_item a img {
  height: 90px;
  object-fit: fill;
}
</style>
