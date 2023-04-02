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
      console.log(this.$route.params.id);
      if (this.$route.params.id.includes("advisory")) {
        return this.$store.state.otherTeam.find(
          (person) => person.id == this.$route.params.id
        );
      } else {
        return this.$store.state.team.find(
          (person) => person.id == this.$route.params.id
        );
      }
    },
  },
};
</script>
