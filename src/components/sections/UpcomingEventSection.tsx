import React from "react";

// Components
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DisplayAllEvents from "@/components/shared/DisplayAllEvents";

// Mocks
import { upcomingEvents } from "@/mocks/upcomingEvents";

const UpcomingEventSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="lorem ipsum dolor sit amet, elit."
          badge="Upcoming Event"
        />

        <DisplayAllEvents events={upcomingEvents} />
      </Container>
    </section>
  );
};

export default UpcomingEventSection;
