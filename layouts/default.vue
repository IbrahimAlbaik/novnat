<template>
  <div class="page-wrapper">
    <nuxt />
    <Footer />
    <!-- <SearchPopup /> -->
  </div>
</template>

<script>
// import SearchPopup from "../components/SearchPopup";
import Footer from "../components/Footer";
export default {
  components: {
    // SearchPopup,
    Footer
  },
  head() {
    return {
      title: "NovNat - "
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
