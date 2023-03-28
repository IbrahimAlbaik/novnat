<template>
  <div>
    <PageHeader title="technology Detail" />
    <ProjectDetail :singleProject="singleProject" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ProjectDetail from "@/components/Projects/ProjectDetail";
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
  computed: {
    singleProject() {
      return this.$store.state.projects.find(
        (project) => project.id == this.$route.params.id
      );
    },
  },
};
</script>
