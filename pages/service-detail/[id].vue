<template>
  <div>
    <PageHeader title="Service Detail" />
    <ServiceDetail />
  </div>
</template>

<script>

  import PageHeader from "@/components/PageHeader";
  import ServiceDetail from "@/components/Services/ServiceDetail";
  export default {
    components: {
      ServiceDetail,
      PageHeader,
    },
    head(){
      return {
        title: "Agrikol  | Service Detail"
      }
    }
  }
</script>
