<template>
  <div>
    <PageHeader title="Team Member Details" />
    <TeamDetail :member="member" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TeamDetail from "@/components/Team/TeamDetails";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "#app";

export default {
  components: {
    TeamDetail,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat | Team Member",
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // Get data directly from store
    const pageData = computed(() => store.getters.getPageData);

    // Get the team member based on route params
    const member = computed(() => {
      const id = route.params.id;
      return pageData.value.teams
        ? pageData.value.teams.find((item) => item.id == id)
        : null;
    });

    return {
      member,
    };
  },
};
</script>
