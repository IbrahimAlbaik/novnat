<template>
  <div class="page-wrapper">
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  head() {
    return {
      title: "NovNat - ",
    };
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchLandingPageData");
    },
  },
  async mounted() {
    const { $startLoading, $stopLoading } = useNuxtApp();
    $startLoading();
    await this.fetchData();
    this.$nextTick(() => {
      setTimeout(() => $stopLoading(), 500);
    });
  },
};
</script>

<style></style>
