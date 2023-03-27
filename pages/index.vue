<template>
  <div>
    <NavFour />
    <SliderFour />
    <DetailsOne />
    <WelcomeTwo id="welcome" />
    <EcoFriendly id="eco" />
    <ServiceFour id="service" />
    <ProjectPage />
    <FaqOne id="faq" />
    <TeamOne id="team" />
    <!-- <TestimonialThree /> -->
    <BrandFour />
    <!-- <AchievedOne /> -->
    <!-- <FunfactOne /> -->
    <!-- <BlogFour /> -->
  </div>
</template>

<script>
import NavFour from "@/components/NavFour";
import SliderFour from "../components/SliderFour";
import DetailsOne from "../components/DetailsOne";
import WelcomeTwo from "../components/WelcomeTwo";
import EcoFriendly from "../components/EcoFriendly";
import ServiceFour from "@/components/Services/ServiceFour";
import ProjectPage from "@/components/Projects/ProjectPage";
import FaqOne from "../components/FaqOne";
import TestimonialThree from "../components/TestimonialThree";
import BrandFour from "@/components/Brands/BrandFour";
import AchievedOne from "../components/AchievedOne";
import FunfactOne from "../components/FunfactOne";
import BlogFour from "../components/Blogs/BlogFour";
import TeamOne from "../components/Team/TeamOne";
export default {
  components: {
    NavFour,
    BlogFour,
    FunfactOne,
    AchievedOne,
    BrandFour,
    TestimonialThree,
    FaqOne,
    TeamOne,
    ServiceFour,
    ProjectPage,
    EcoFriendly,
    WelcomeTwo,
    DetailsOne,
    SliderFour,
  },
  head() {
    return {
      title: "NovNat  | Home",
    };
  },
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    const findEl = async (hash, x) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve();
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1));
          }, 100);
        })
      );
    };
    console.log(to);
    if (to.hash) {
      let el = await findEl(to.hash);
      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }

    return { x: 0, y: 0 };
  },
};
</script>
