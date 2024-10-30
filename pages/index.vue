<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <NavFour :about="landingPageData.data.about" />
    <SliderFour :sliders="landingPageData.data.sliders" />
    <DetailsOne :features="landingPageData.data.features" />
    <ProjectPage :technologies="landingPageData.data.technologies" />
    <Gallery :galleries="landingPageData.data.galleries" />
    <FaqOne :faqs="landingPageData.data.faqs" />
    <TeamOne :teams="landingPageData.data.teams" />
    <Timeline :stories="landingPageData.data.stories" />
    <BrandOne :goals="landingPageData.data.goals" />
    <BrandFour :partners="landingPageData.data.partners" />
  </div>
</template>
<script setup>
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useAsyncData } from '#app';

// Access the store
const store = useStore();

// Fetch the landing page data
const { data: landingPageData, error } = await useAsyncData('landingPage', async () => {
  const { $axios } = useNuxtApp(); // Access the injected axios instance
  await store.dispatch('fetchLandingPageData', $axios);
  return store.getters.getLandingPageData; // Return the landing page data after fetching
});

// Access loading state from the store
const loading = computed(() => store.getters.isLoading);

// Log the landing page data for debugging purposes
// console.log('Landing page data:', landingPageData);
</script>
