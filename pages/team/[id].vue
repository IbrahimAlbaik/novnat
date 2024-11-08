<template>
  <div v-if="singlePerson">
    <PageHeader :title="singlePerson ? singlePerson.name : null" />
    <TeamDetails :singlePerson="singlePerson" />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader";
import TeamDetails from "@/components/Team/TeamDetails";
import { computed } from "vue";
import { useStore } from "vuex";
import { useAsyncData, useRoute } from "#app";

export default {
  components: {
    PageHeader,
    TeamDetails,
  },
  head() {
    return {
      title: "NovNat | Team details",
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
    const singlePerson = computed(() => {
      const id = route.params.id;
      return landingPageData.value.teams
        ? landingPageData.value.teams.find((person) => person.id == id)
        : null;
    });

    return {
      singlePerson,
      landingPageData,
    };
  },
};
</script>
