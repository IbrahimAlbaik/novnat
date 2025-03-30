<template>
  <div>
    <NavFour />
    <SliderFour v-if="pageData.sliders?.length" :sliders="pageData.sliders" />
    <DetailsOne :features="pageData.features" />
    <ProjectPage :technologies="pageData.technologies" />
    <Gallery :galleries="pageData.galleries" />
    <FaqOne :faqs="pageData.faqs" />
    <TeamOne :teams="pageData.teams" />
    <Timeline :stories="pageData.stories" />
    <BrandOne :goals="pageData.goals" />
    <BrandFour :partners="pageData.partners" />
  </div>
</template>

<script setup>
import NavFour from "@/components/NavFour";
import SliderFour from "@/components/SliderFour";
import DetailsOne from "@/components/DetailsOne";
import ProjectPage from "@/components/Projects/ProjectPage";
import FaqOne from "@/components/FaqOne";
import Timeline from "@/components/About/Timeline";
import BrandOne from "@/components/Brands/BrandOne";
import BrandFour from "@/components/Brands/BrandFour";
import TeamOne from "@/components/Team/TeamOne";
import Gallery from "@/components/Gallery/GalleryOne";
import { computed } from "vue";
import { useStore } from "vuex";

// Access the store
const store = useStore();

// Access store state through computed properties
const loading = computed(() => store.getters.isLoading);
const pageData = computed(() => store.getters.getPageData);
</script>

<style scoped>
.banner_four_section {
  position: relative;
  height: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
  min-height: 700px;
}

.loading-state {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.loading-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-inner {
  width: 100%;
  height: 100%;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
