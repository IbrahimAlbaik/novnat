<template>
  <div>
    <PageHeader title="Team" />
    <Team />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import Team from "../components/Team/Team";
  export default {
    components: {
      PageHeader,
      Team,
    },
    head(){
      return {
        title: "Agrikol  | Farmers"
      }
    }
  }
</script>
