<template>
  <section class="banner_four_section">
    <div class="banner-carousel-four owl-theme owl-carousel">
      <no-ssr>
        <carousel :items="1" :autoplay="true" :nav="false">
          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/main-slider/1.jpg);
              "
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1>
                      <span>Harvesting</span> water from air,<br />
                      one drop at a time
                    </h1>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/main-slider/2.jpg);
              "
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1>
                      <span>Pioneering</span> nanomaterials<br />
                      of the future
                    </h1>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/main-slider/3.jpg);
              "
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <div class="content text-right">
                  <div class="inner">
                    <h1>
                      <span>Meshing</span> chemistry<br />
                      and engineering to solve <br />
                      today's problems
                    </h1>
                    <div class="link-box">
                      <nuxt-link to="/about" class="thm-btn"
                        >Discover More</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderFour",
  data() {
    return {
      silderList: [
        {
          image: "",
          boldText: "Harvesting",
          firstText: " water from air,",
          breakingText: "one drop at a time",
          breakingText2: "",
        },
        {
          image: "",
          boldText: "Harvesting",
          firstText: " water from air,",
          breakingText: "one drop at a time",
          breakingText2: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
