<template>
  <div>
    <NavFour />
    <SliderFour />
    <DetailsOne />
    <ProjectPage />
    <Gallery />
    <FaqOne />
    <TeamOne />
    <Timeline />
    <BrandOne />
    <BrandFour />
    <!-- <WelcomeTwo /> -->
    <!-- <EcoFriendly /> -->
    <!-- <ServiceFour /> -->
    <!-- <Uniqueness /> -->
    <!-- <TestimonialThree /> -->
    <!-- <AchievedOne /> -->
    <!-- <FunfactOne /> -->
    <!-- <BlogFour /> -->
  </div>
</template>

<script>
import NavFour from "@/components/NavFour";
import SliderFour from "@/components/SliderFour";
import EcoFriendly from "@/components/EcoFriendly";
import DetailsOne from "@/components/DetailsOne";
import ProjectPage from "@/components/Projects/ProjectPage";
import FaqOne from "@/components/FaqOne";
import Timeline from "@/components/About/Timeline";
import BrandOne from "@/components/Brands/BrandOne";
import BrandFour from "@/components/Brands/BrandFour";
import TeamOne from "@/components/Team/TeamOne";
import Gallery from "@/components/Gallery/GalleryOne";
// import TestimonialThree from "@/components/TestimonialThree";
// import ServiceFour from "@/components/Services/ServiceFour";
// import WelcomeTwo from "@/components/WelcomeTwo";
// import Uniqueness from "@/components/Services/Uniqueness";
// import AchievedOne from "@/components/AchievedOne";
// import FunfactOne from "@/components/FunfactOne";
// import BlogFour from "@/components/Blogs/BlogFour";

export default {
  components: {
    NavFour,
    BrandOne,
    BrandFour,
    FaqOne,
    TeamOne,
    ProjectPage,
    EcoFriendly,
    DetailsOne,
    SliderFour,
    Timeline,
    Gallery,
  },
  head() {
    return {
      title: "NovNat",
    };
  },
};
</script>
