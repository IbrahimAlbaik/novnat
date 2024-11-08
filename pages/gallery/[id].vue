<template>
  <div>
    <PageHeader title="Gallery" />
    <Gallery v-if="gallery && !loading" :gallery="gallery" />
    <div v-else>Loading...</div>
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
      return landingPageData.value && landingPageData.value.galleries
        ? landingPageData.value.galleries.find((gallery) => gallery.id == id)
        : null;
    });

    const loading = computed(() => store.getters.isLoading);

    return {
      gallery,
      landingPageData,
      loading,
    };
  },
};
</script>
