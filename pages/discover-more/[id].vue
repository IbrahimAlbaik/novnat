<template>
  <div>
    <PageHeader title="discover more" />
    <DiscoverMore v-if="about" :about="about" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import DiscoverMore from "@/components/About/DiscoverMore";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "#app";

export default {
  components: {
    DiscoverMore,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat | About",
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // Get data directly from store
    const pageData = computed(() => store.getters.getPageData);

    // Computed property to get the single person based on the route params
    const about = computed(() => {
      const id = route.params.id;
      return pageData.value.sliders ? pageData.value.sliders.find((slide) => slide.id == id) : null;
    });

    return {
      about,
      pageData,
    };
  },
};
</script>
