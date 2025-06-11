<template>
  <div>
    <PageHeader title="Service Details" />
    <ServiceDetail v-if="service" :service="service" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/Services/ServiceDetail";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "#app";

export default {
  components: {
    ServiceDetail,
    PageHeader,
  },
  head() {
    return {
      title: "NovNat | Service Detail",
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    // Get data directly from store
    const pageData = computed(() => store.getters.getPageData);

    // Get the service based on route params
    const service = computed(() => {
      const id = route.params.id;
      return pageData.value.features
        ? pageData.value.features.find((item) => item.id == id)
        : null;
    });

    return {
      service,
    };
  },
};
</script>
