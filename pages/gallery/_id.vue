<template>
  <div>
    <PageHeader title="Gallery" />
    <Gallery />
  </div>
</template>

<script>

  import Nav from "@/components/Nav";
  import PageHeader from "@/components/PageHeader";
  import Gallery from "@/components/Gallery/Gallery";
  import Footer from "@/components/Footer";
  export default {
    components: {
      Footer,
      PageHeader,
      Gallery,
      Nav
    },
    head(){
      return {
        title: "Novnat  | Gallery"
      }
    }
  }
</script>
