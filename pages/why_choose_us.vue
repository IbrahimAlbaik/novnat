<template>
  <div>
    <PageHeader title="Why Choose us" />
    <BestCompany />
    <TestimonialThree />
    <BenefitsTwo />
    <WhyChooseOne />
    <CompanySolutions />
    <BrandFour />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import BestCompany from "../components/BestCompany";
  import TestimonialThree from "../components/TestimonialThree";
  import BenefitsTwo from "../components/BenefitsTwo";
  import WhyChooseOne from "../components/WhyChooseOne";
  import CompanySolutions from "../components/CompanySolutions";
  import BrandFour from "../components/BrandFour";
  export default {
    components: {
      BrandFour,
      CompanySolutions,
      WhyChooseOne,
      BenefitsTwo,
      TestimonialThree,
      BestCompany,
      PageHeader
    },
    head(){
      return {
        title: "Agrikol  | Why Choose us"
      }
    }
  }
</script>
