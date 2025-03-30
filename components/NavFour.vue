<template>
  <div class="site_header__header_four_wrap">
    <div class="topbar-one topbar_four">
      <div class="container">
        <div class="topbar-one__left">
          <a :href="`mailto:${aboutNovNat.email}`"
            ><span class="icon-message"></span>{{ aboutNovNat.email }}</a
          >
          <!-- <a :href="`tel:${aboutNovNat.phone}`"
            ><span class="icon-phone-call"></span>{{ aboutNovNat.phone }}</a
          > -->
        </div>
        <div class="topbar-one__middle">
          <a href="/" class="main-nav__logo">
            <img
              src="~assets/images/resources/logo_novnat.png"
              class="main-logo"
              alt="Awesome Image"
            />
          </a>
        </div>
        <div class="topbar-one__right">
          <div class="topbar-one__social home-four">
            <!-- <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a> -->
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

    <header class="main-nav__header-one main-nav__header-four">
      <nav
        :class="`header-navigation stricky ${
          sticky ? 'stricked-menu stricky-fixed' : ''
        }`"
      >
        <div class="container clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="main-nav__left main_nav__left_four">
            <!-- <a
              href="#"
              class="main-nav__search search-popup__toggler"
              @click="searchPopupStatusChange"
              ><i class="icon-magnifying-glass"></i
            ></a> -->
            <a href="#" class="side-menu__toggler">
              <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
            </a>
          </div>
          <div class="main-nav__main-navigation four">
            <ul class="main-nav__navigation-box">
              <li>
                <nuxt-link :to="{ path: '/', hash: '#home' }">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#projects' }"
                  >Our Technology</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#gallery' }"
                  >Gallery</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#faqs' }">FAQs</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#team' }">Team</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#about' }">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        class="mobile-nav__container"
        :style="`display: ${mobileToggle ? 'block' : 'none'}`"
      >
        <!-- content is loading via js -->

        <ul class="main-nav__navigation-box">
          <li>
            <nuxt-link :to="{ path: '/', hash: '#home' }">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#projects' }"
              >Our Technology</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#faqs' }">Faqs</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="{ path: '/', hash: '#team' }">Team</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#about' }">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "NavFour",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
  },
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
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
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
    ...mapMutations({
      searchPopupStatusChange: "changeSearchPopupStatus",
    }),
  },
};
</script>

<style scoped></style>
