<template>
  <div v-if="singleTechnology">
    <PageHeader :title="singleTechnology.title" />
    <ProjectDetail :singleTechnology="singleTechnology" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ProjectDetail from "@/components/Projects/ProjectDetail";
import { computed } from "vue";
import { useStore } from "vuex";
import { useAsyncData, useRoute } from "#app";
export default {
  components: {
    ProjectDetail,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat  | Technology Detail",
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
    const singleTechnology = computed(() => {
      const id = route.params.id;
      return landingPageData.value && landingPageData.value.technologies
        ? landingPageData.value.technologies.find((person) => person.id == id)
        : null;
    });

    return {
      singleTechnology,
    };
  },
};
</script>
