<template>
  <div>
    <PageHeader title="Team" />
    <TeamOne id="team" />
    <Team />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TeamOne from "@/components/Team/TeamOne";
import Team from "@/components/Team/Team";

export default {
  components: {
    PageHeader,
    TeamOne,
    Team,
  },
  head() {
    return {
      title: "NovNat  | Teams",
    };
  },
};
</script>
