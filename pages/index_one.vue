<template>
  <div>
    <Nav />
    <Slider />
    <AboutOne />
    <ServiceOne />
    <BrandOne />
    <FeaturedOne />
    <VideoOne />
    <TestimonialOne />
    <RecentProject />
    <Benefits />
    <ProductOne />
    <BlogOne />
    <CallToActionOne />
    <Footer />
  </div>
</template>

<script>
import Slider from "../components/Slider";
import Nav from "../components/Nav";
import AboutOne from "@/components/About/AboutOne";
import ServiceOne from "../components/Services/ServiceOne";
import BrandOne from "@/components/Brands/BrandOne";
import FeaturedOne from "../components/FeaturedOne";
import VideoOne from "../components/VideoOne";
import TestimonialOne from "../components/TestimonialOne";
import RecentProject from "../components/RecentProject";
import Benefits from "../components/Benefits";
import ProductOne from "../components/ProductOne";
import BlogOne from "../components/Blogs/BlogOne";
import CallToActionOne from "../components/CallToActionOne";
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
    CallToActionOne,
    BlogOne,
    ProductOne,
    Benefits,
    RecentProject,
    TestimonialOne,
    VideoOne,
    FeaturedOne,
    BrandOne,
    ServiceOne,
    AboutOne,
    Slider,
    Nav,
  },
};
</script>
