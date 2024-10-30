<template>
  <div>
    <PageHeader title="Gallery" />
    <Gallery :gallery="gallery" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery/Gallery";
import { computed } from "vue";
import { useStore } from "vuex";
import { useAsyncData, useRoute } from "#app";
export default {
  components: {
    PageHeader,
    Gallery,
  },
  head() {
    return {
      title: "Novnat  | Gallery",
    };
  },
    setup() {
    const store = useStore(); // Access Vuex store
    const route = useRoute(); // Access current route
    // Fetch the landing page data asynchronously
    const { data: landingPageData } = useAsyncData("landingPage", async () => {
      const { $axios } = useNuxtApp(); // Access the injected Axios instance
      await store.dispatch("fetchLandingPageData", $axios);
      return store.getters.getLandingPageData.data;
    });

    // Computed property to get the single person based on the route params
    const gallery = computed(() => {
      const id = route.params.id;
      return landingPageData.value.galleries.find(
        (person) => person.id == id
      );
    });

    return {
      gallery,
      landingPageData,
    };
  },

  // computed: {
  //   gallery() {
  //     return this.$store.getters["getLandingPageData"].data.galleries.find(
  //       (gallery) => gallery.id == this.$route.params.id
  //     );
  //   },
  // },
  // async fetch({ store }) {
  //   await store.dispatch("fetchLandingPageData"); // Fetch API data when the component is loaded
  // },
};
</script>
