<template>
  <div>
    <PageHeader title="Services" />
    <ServicePage />
    <ServiceOne />
    <BrandOne />
    <FaqOne />
    <CallToActionThree />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/Services/ServicePage";
  import ServiceOne from "../components/Services/ServiceOne";
  import BrandOne from "@/components/Brands/BrandOne";
  import FaqOne from "../components/FaqOne";
  import CallToActionThree from "../components/CallToActionThree";
  export default {
    components: {
      CallToActionThree,
      FaqOne,
      BrandOne,
      ServiceOne,
      ServicePage,
      PageHeader,
    },
    head(){
      return {
        title: "Agrikol  | Services"
      }
    }
  }
</script>
