"use client";

import React, { FC, useState } from "react";
import Button from "../ui/Button";
import TeamCard from "../ui/TeamCard";
import Member from "@/types/member";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

interface DisplayTeamProps {
  members: Member[]
}

const DisplayAllTeam: FC<DisplayTeamProps> = (props) => {
  const { members } = props;
  const maxEventsToShow = 8;
  const [visibleTeam, setVisibleTeam] = useState(
    members.slice(0, maxEventsToShow)
  );
  const [showMore, setShowMore] = useState(members.length > maxEventsToShow);

  const handleShowMore = () => {
    const remainingTeam = members.slice(visibleTeam.length);
    setVisibleTeam((prevTeam) => [...prevTeam, ...remainingTeam]);
    setShowMore(false);
  };

  return (
    <>
      {visibleTeam.length > 0 ? (
        <div className="mt-[20px] sm:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-[20px]">
          {visibleTeam.map((team, i) => (
            <TeamCard
              key={i}
              image={team.image}
              name={team.name}
              skill={team.skill}
              bio={team.bio}
              socials={team.socials}
            />
          ))}
        </div>
      ) : (
        <div className="mt-[20px] sm:mt-[40px] flex flex-col gap-[20px] justify-center items-center bg-[#f8f8f8] max-w-fit mx-auto py-[40px] px-[60px] rounded-[16px] border-2 border-[#dadada]">
          <h4 className="text-[28px] font-semibold text-black">👀 Oops!</h4>
          <p className="max-w-[300px] text-[16px] text-[#4d4d4d] text-center">
            Currently, there&apos;s no team information available.
          </p>
        </div>
      )}

      {showMore && (
        <div className="flex justify-center items-center">
          <Button
            onClick={handleShowMore}
            variant={VariantTypes.Warning}
            size={SizesTypes.Small}
            className="mt-[40px] max-w-[200px] mx-auto"
          >
            See More
          </Button>
        </div>
      )}
    </>
  );
};

export default DisplayAllTeam;
