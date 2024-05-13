<template>
  <div>
    <PageHeader title="Contact" />
    <!-- <Location /> -->
  <ContactTwo />
    <!-- <GMap /> -->
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  // import Location from "../components/Location";
  import ContactTwo from "../components/ContactTwo";
  // import GMap from "../components/GMap";
  export default {
    components: {
      // GMap,
      ContactTwo,
      // Location,
      PageHeader,
    },
    head(){
      return {
        title: "Agrikol  | Contact"
      }
    }
  }
</script>
