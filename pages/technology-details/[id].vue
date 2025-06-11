<template>
  <div>
    <PageHeader title="Technology Details" />
    <TechnologyDetail :singleTechnology="technology" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TechnologyDetail from "@/components/Projects/ProjectDetail";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "#app";

export default {
  components: {
    TechnologyDetail,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat | Technology Detail",
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // Get data directly from store
    const pageData = computed(() => store.getters.getPageData);

    // Get the technology based on route params
    const technology = computed(() => {
      const id = route.params.id;
      return pageData.value.technologies
        ? pageData.value.technologies.find((item) => item.id == id)
        : null;
    });

    return {
      technology,
    };
  },
};
</script>
