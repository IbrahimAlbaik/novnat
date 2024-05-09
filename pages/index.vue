<template>
  <div>
    <NavFour />
    <SliderFour />
    <DetailsOne />
    <!-- <WelcomeTwo /> -->
    <!-- <EcoFriendly /> -->
    <!-- <ServiceFour /> -->
    <ProjectPage />
    <Uniqueness />
    <FaqOne />
    <TeamOne />
    <!-- <TestimonialThree /> -->
    <Timeline />
    <BrandOne />
    <BrandFour />
    <!-- <AchievedOne /> -->
    <!-- <FunfactOne /> -->
    <!-- <BlogFour /> -->
  </div>
</template>

<script>
import NavFour from "@/components/NavFour";
import SliderFour from "../components/SliderFour";
import EcoFriendly from "../components/EcoFriendly";
// import WelcomeTwo from "../components/WelcomeTwo";
import DetailsOne from "../components/DetailsOne";
// import ServiceFour from "@/components/Services/ServiceFour";
import Uniqueness from "@/components/Services/Uniqueness";
import ProjectPage from "@/components/Projects/ProjectPage";
import FaqOne from "@/components/FaqOne";
import Timeline from "@/components/About/Timeline";
// import TestimonialThree from "@/components/TestimonialThree";
import BrandOne from "@/components/Brands/BrandOne";
import BrandFour from "@/components/Brands/BrandFour";
// import AchievedOne from "@/components/AchievedOne";
// import FunfactOne from "@/components/FunfactOne";
// import BlogFour from "@/components/Blogs/BlogFour";
import TeamOne from "@/components/Team/TeamOne";
export default {
  components: {
    NavFour,
    BrandOne,
    BrandFour,
    FaqOne,
    TeamOne,
    // ServiceFour,
    Uniqueness,
    ProjectPage,
    EcoFriendly,
    // WelcomeTwo,
    DetailsOne,
    SliderFour,
    Timeline,
  },
  head() {
    return {
      title: "NovNat  | Home",
    };
  },
};
</script>
