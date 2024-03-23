import React from "react";

// Components
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DisplayAllTeam from "@/components/shared/DisplayAllTeam";

// Mocks
import Members from "@/mocks/members";

const TeamSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader title="Say hello to our team!" badge="Our Team" />

        <DisplayAllTeam members={Members} />
      </Container>
    </section>
  );
};

export default TeamSection;
