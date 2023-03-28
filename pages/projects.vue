<template>
  <div>
    <PageHeader title="Our Technology" />
    <ProjectPage />
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import ProjectPage from "@/components/Projects/ProjectPage";
export default {
  components: {
    ProjectPage,
    PageHeader,
  },
  head() {
    return {
      title: "Agrikol  | Our Technology"
    };
  }
};
</script>
