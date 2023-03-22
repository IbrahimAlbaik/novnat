<template>
  <div>
    <PageHeader title="Our Projects" />
    <ProjectPage />
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import ProjectPage from "../components/ProjectPage";
export default {
  components: {
    ProjectPage,
    PageHeader,
  },
  head() {
    return {
      title: "Agrikol  | Our Projects"
    };
  }
};
</script>
