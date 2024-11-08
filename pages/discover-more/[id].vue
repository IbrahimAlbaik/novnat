<template>
  <div>
    <PageHeader title="discover more" />
    <DiscoverMore v-if="!loading && about" :about="about" />
    <div v-else>loading...</div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import DiscoverMore from "@/components/About/DiscoverMore";
import { computed } from "vue";
import { useStore } from "vuex";
import { useAsyncData, useRoute } from "#app";
export default {
  components: {
    DiscoverMore,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat  | About",
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
    const about = computed(() => {
      const id = route.params.id;
      return landingPageData && landingPageData.value && landingPageData.value.sliders
        ? landingPageData.value.sliders.find((slide) => slide.id == id)
        : null;
    });

    const loading = computed(() => store.getters.isLoading);

    return {
      about,
      landingPageData,
      loading,
    };
  },
};
</script>
