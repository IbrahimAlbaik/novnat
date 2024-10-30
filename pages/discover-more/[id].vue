<template>
  <div>
    <PageHeader title="discover more" />
    <DiscoverMore />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import DiscoverMore from "@/components/About/DiscoverMore";
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
};
</script>
