<template>
  <div class="page-wrapper">
    <NavFour />
    <nuxt />
    <Footer />
    <SearchPopup />
  </div>
</template>

<script>
import SearchPopup from "../components/SearchPopup";
import NavFour from "../components/NavFour";
import Footer from "../components/Footer";
export default {
  components: {
    SearchPopup,
    NavFour,
    Footer
  },
  head() {
    return {
      title: "Agrikol - Vue Nuxt Template for Agriculture Farm & Farmers"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

<style></style>
