<template>
  <div>
    <PageHeader title="Why Choose us" />
    <BestCompany />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import BestCompany from "../components/BestCompany";
  export default {
    components: {
      BestCompany,
      PageHeader
    },
    head(){
      return {
        title: "NovNat  | Why Choose us"
      }
    }
  }
</script>
