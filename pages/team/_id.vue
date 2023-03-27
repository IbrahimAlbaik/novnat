<template>
  <div>
    <PageHeader :title="singlePerson ? singlePerson.name : null" />
    <TeamDetails :singlePerson="singlePerson" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TeamDetails from "@/components/Team/TeamDetails";

export default {
  components: {
    PageHeader,
    TeamDetails,
  },
  head() {
    return {
      title: "NovNat  | Team details",
    };
  },
  computed: {
    singlePerson() {
      return this.$store.state.teams.find(
        (person) => person.id == this.$route.params.id
      );
    },
  },
};
</script>
