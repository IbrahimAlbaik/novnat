<template>
  <div>
    <SliderFour />
    <DetailsOne />
    <WelcomeTwo />
    <EcoFriendly />
    <ServiceFour />
    <FaqOne />
    <TeamOne />
    <!-- <TestimonialThree /> -->
    <BrandFour />
    <AchievedOne />
    <FunfactOne />
    <BlogFour />
  </div>
</template>

<script>
import SliderFour from "../components/SliderFour";
import DetailsOne from "../components/DetailsOne";
import WelcomeTwo from "../components/WelcomeTwo";
import EcoFriendly from "../components/EcoFriendly";
import ServiceFour from "../components/Services/ServiceFour";
import FaqOne from "../components/FaqOne";
import TestimonialThree from "../components/TestimonialThree";
import BrandFour from "../components/BrandFour";
import AchievedOne from "../components/AchievedOne";
import FunfactOne from "../components/FunfactOne";
import BlogFour from "../components/Blogs/BlogFour";
import TeamOne from "../components/Team/TeamOne";
export default {
  components: {
    BlogFour,
    FunfactOne,
    AchievedOne,
    BrandFour,
    TestimonialThree,
    FaqOne,
    TeamOne,
    ServiceFour,
    EcoFriendly,
    WelcomeTwo,
    DetailsOne,
    SliderFour
  },
  head() {
    return {
      title: "Agrikol  | Home 4"
    };
  }
};
</script>
