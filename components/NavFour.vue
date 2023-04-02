<template>
  <div class="site_header__header_four_wrap">
    <div class="topbar-one topbar_four">
      <div class="container">
        <div class="topbar-one__left">
          <a :href="`mailto:${aboutNovNat.email}`"
            ><span class="icon-message"></span>{{ aboutNovNat.email }}</a
          >
          <a :href="`tel:${aboutNovNat.phone}`"
            ><span class="icon-phone-call"></span>{{ aboutNovNat.phone }}</a
          >
        </div>
        <div class="topbar-one__middle">
          <a href="/" class="main-nav__logo">
            <img
              src="/assets/images/resources/logo_novnat.png"
              class="main-logo"
              alt="Awesome Image"
            />
          </a>
        </div>
        <div class="topbar-one__right">
          <div class="topbar-one__social home-four">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
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
                <nuxt-link :to="{ path: '/', hash: 'home' }">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: 'uniqueness' }"
                  >Uniqueness</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: 'services' }"
                  >Services</nuxt-link
                >
              </li>
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
                <nuxt-link :to="{ path: '/', hash: 'about' }">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </nav>

      <nav
        class="mobile-nav__container"
        :style="`display: ${mobileToggle ? 'block' : 'none'}`"
      >
        <!-- content is loading via js -->

        <ul class="main-nav__navigation-box">
          <li>
            <nuxt-link :to="{ path: '/', hash: 'home' }">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: 'uniqueness' }"
              >Uniqueness</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: 'services' }"
              >Services</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: 'projects' }"
              >Our Technology</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: 'faqs' }">Faqs</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="{ path: '/', hash: 'team' }">Team</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: 'about' }">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
          <!-- <li class="dropdown current">
            <div class="menu-holder">
              Home<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          </li> -->
          <!-- <li class="dropdown">
            <div class="menu-holder">
              Services<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <ul>
              <li><nuxt-link to="/service">Services</nuxt-link></li>
              <li>
                <nuxt-link to="/service-detail">Services Detail</nuxt-link>
              </li>
            </ul>
          </li> -->
          <!-- <li><nuxt-link to="/product">Products</nuxt-link>asanmama</li> -->
          <!-- <li class="dropdown">
            <div class="menu-holder">
              Our Technology<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <ul>
              <li><nuxt-link to="/projects">Projects</nuxt-link></li>
              <li>
                <nuxt-link to="/projects_detail">Projects Detail</nuxt-link>
              </li>
            </ul>
          </li> -->
          <!-- <li class="dropdown">
            <div class="menu-holder">
              Shop<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <ul>
              <li><nuxt-link to="/product">Products</nuxt-link></li>
              <li>
                <nuxt-link to="/product-detail">Product Detail</nuxt-link>
              </li>
              <li><nuxt-link to="/cart">Cart</nuxt-link></li>
              <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>
            </ul>
          </li> -->
          <!-- <li class="dropdown">
            <div class="menu-holder">
              Pages<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <ul>
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="/why_choose_us">Why Choose Us</nuxt-link></li>
              <li><nuxt-link to="/farmers">Farmers</nuxt-link></li>
              <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
            </ul>
          </li> -->
          <!-- <li class="dropdown">
            <div class="menu-holder">
              News<button class="dropdown-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <ul>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li><nuxt-link to="/news_detail">News Details</nuxt-link></li>
            </ul>
          </li> -->
          <!-- <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li> -->
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
