<template>
  <div>
    <PageHeader title="Gallery Details" />
    <GalleryDetail v-if="gallery" :gallery="gallery" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import GalleryDetail from "@/components/Gallery/Gallery";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "#app";

export default {
  components: {
    GalleryDetail,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat | Gallery Detail",
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // Get data directly from store
    const pageData = computed(() => store.getters.getPageData);

    // Get the gallery item based on route params
    const gallery = computed(() => {
      const id = route.params.id;
      return pageData.value.galleries
        ? pageData.value.galleries.find((item) => item.id == id)
        : null;
    });

    return {
      gallery,
    };
  },
};
</script>
