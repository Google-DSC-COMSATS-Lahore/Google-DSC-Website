"use client";

import React, { FC, useMemo, useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Event from "@/types/event";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

interface DisplayEventsProps {
  events: Event[];
}

const DisplayAllEvents: FC<DisplayEventsProps> = (props) => {
  const { events } = props;
  const maxEventsToShow = 8;
  const [showMore, setShowMore] = useState(events.length > maxEventsToShow);

  const eventsToShow = useMemo(() => {
    if (!showMore) {
      return events;
    } else {
      return events.slice(0, maxEventsToShow);
    }
  }, [showMore, events]);

  return (
    <>
      {eventsToShow.length > 0 ? (
        <div className="mt-[20px] sm:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-[20px]">
          {eventsToShow.map((event, i) => (
            <Card
              key={i}
              image={event.image}
              title={event.name}
              labels={event.category}
              descripton={event.date}
              url={event.link}
            />
          ))}
        </div>
      ) : (
        <div className="mt-[20px] sm:mt-[40px] flex flex-col gap-[30px] justify-center items-center bg-[#fff] md:max-w-fit mx-auto py-[40px] sm:px-[60px] rounded-[16px] border-2 border-[#dadada]">
          <h4 className="text-[22px] md:text-[32px] font-semibold text-black">
            👀 Oops!
          </h4>
          <p className="max-w-[340px] text-[18px] leading-[140%] text-[#4d4d4d] text-center">
            The event ground seems to be empty right now. Check back later!
          </p>
        </div>
      )}

      {showMore && (
        <div className="flex justify-center items-center">
          <Button
            onClick={() => setShowMore(false)}
            variant={VariantTypes.Warning}
            size={SizesTypes.Large}
            className="mt-[40px] max-w-[200px] mx-auto"
          >
            See More
          </Button>
        </div>
      )}
    </>
  );
};

export default DisplayAllEvents;
