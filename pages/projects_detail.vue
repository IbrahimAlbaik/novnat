<template>
  <div>
    <PageHeader title="Project Detail" />
    <ProjectDetail />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import ProjectDetail from "../components/ProjectDetail";
  export default {
    components: {
      ProjectDetail,
      PageHeader
    },
    head(){
      return {
        title: "Agrikol  | Project Detail"
      }
    }
  }
</script>
