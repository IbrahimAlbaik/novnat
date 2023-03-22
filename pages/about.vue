<template>
  <div>
    <PageHeader title="About" />
    <AboutTwo />
    <TestimonialFour />
    <BrandOne />
    <VideoOne />
    <ProductOne />
    <TeamOne />
    <CallToActionOne />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import AboutTwo from "../components/AboutTwo";
  import TestimonialFour from "../components/TestimonialFour";
  import BrandOne from "../components/BrandOne";
  import VideoOne from "../components/VideoOne";
  import ProductOne from "../components/ProductOne";
  import TeamOne from "../components/Team/TeamOne";
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      TeamOne,
      ProductOne,
      VideoOne,
      BrandOne,
      TestimonialFour,
      AboutTwo,
      PageHeader,
    },
    head(){
      return {
        title: "Agrikol  | About"
      }
    }
  }
</script>
