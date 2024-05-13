<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer_farm_image">
        <img
          src="/assets/images/resources/site-footer-farm.png"
          alt="Farm Image"
        />
      </div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="footer-widget__column footer-widget__about wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div class="footer-widget__title">
                <h3>About</h3>
              </div>
              <div class="footer-widget_about_text">
                <p>
                  We are committed to creating a world where water is accessible
                  to all.
                </p>
              </div>
              <!-- <form>
                <div class="footer_input-box">
                  <input type="Email" placeholder="Email Address" />
                  <button type="submit" class="button">
                    <i class="fa fa-check"></i>
                  </button>
                </div>
              </form> -->
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div
              class="footer-widget__column footer-widget__link wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div class="footer-widget__title">
                <h3>Explore</h3>
              </div>
              <ul class="footer-widget__links-list list-unstyled">
                <li>
                  <nuxt-link :to="{ path: '/', hash: 'projects' }"
                    >Technology</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link :to="{ path: '/', hash: 'faqs' }">Faqs</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/', hash: 'team' }">Team</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/', hash: 'about' }"
                    >About</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__news wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div class="footer-widget__title">
                <h3>News</h3>
              </div>
              <ul class="footer-widget__news list-unstyled">
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="/assets/images/resources/footer-1-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/news_detail">
                        Learn 10 Best Tips for New Formers</a
                      >
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>30 Oct, 2020</p>
                  </div>
                </li>
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="/assets/images/resources/footer-1-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/news_detail"
                        >Farmer Sentiment Darkens Hopes Fade</a
                      >
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>30 Oct, 2020</p>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
          <div
            class="col-xl-3 col-lg-3 col-md-6 offset-xl-3 offset-lg-3 offset-md-0"
          >
            <div
              class="footer-widget__column footer-widget__contact wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="footer-widget__title">
                <h3>Contact</h3>
              </div>
              <div class="footer-widget_contact">
                <p v-html="aboutNovNat.address"></p>
                <a :href="`mailto:${aboutNovNat.email}`">{{
                  aboutNovNat.email
                }}</a
                ><br />
                <!-- <a :href="`tel:${aboutNovNat.phone}`">{{
                  aboutNovNat.phone
                }}</a> -->
                <div class="site-footer__social">
                  <a
                    v-for="media in aboutNovNat.socialMediaLinks"
                    :key="media.id"
                    :href="media.link"
                    target="_blank"
                    ><i :class="media.icon"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="site-footer_bottom">
      <div class="container">
        <div class="site-footer_bottom_copyright">
          <p>
            &#169; All copyright 2023, <a href="#">{{ aboutNovNat.title }}</a>
          </p>
        </div>
        <!-- <div class="site-footer_bottom_menu">
          <ul class="list-unstyled">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div> -->
      </div>
    </div>

    <a
      @click="scrollTop"
      href="#"
      class="scroll-to-target scroll-to-top"
      :style="`display: ${scrollBtn ? 'block' : 'none'}`"
      ><i class="fa fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
    };
  },
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped></style>
