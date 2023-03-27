<template>
  <div>
    <PageHeader title="About" />
    <AboutTwo />
    <TestimonialFour />
    <BrandOne />
    <VideoOne />
    <ProductOne />
    <CallToActionOne />
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import AboutTwo from "@/components/About/AboutTwo";
  import TestimonialFour from "../components/TestimonialFour";
  import BrandOne from "@/components/Brands/BrandOne";
  import VideoOne from "../components/VideoOne";
  import ProductOne from "../components/ProductOne";
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
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
