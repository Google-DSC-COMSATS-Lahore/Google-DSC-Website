"use client";

import React, { FC, useMemo, useState } from "react";
import Button from "../ui/Button";
import { default as MemberCard } from "./Member";
import Container from "@/components/shared/Container";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";
import Member from "@/types/member";

interface DisplayAllMembersProps {
  members: Member[];
}

const DisplayAllMembers: FC<DisplayAllMembersProps> = (props) => {
  const { members } = props;
  const maxMembersToShow = 3;
  const [showMore, setShowMore] = useState(members.length > maxMembersToShow);

  const membersToShow = useMemo(() => {
    if (!showMore) {
      return members;
    } else {
      return members.slice(0, maxMembersToShow);
    }
  }, [showMore, members]);

  return (
    <Container>
      {members.length > 0 ? (
        <div className="mt-[64px] sm:mt-[40px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[20px]">
          {membersToShow.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      ) : (
        <div className="mt-[16px] md:mt-[20px] sm:mt-[40px] flex flex-col gap-[20px] justify-center items-center bg-[#f8f8f8] max-w-fit mx-auto py-[40px] px-[60px] rounded-[16px] border-2 border-[#dadada]">
          <h4 className="text-[28px] font-semibold text-black">👀 Oops!</h4>
          <p className="max-w-[300px] text-[16px] text-[#4d4d4d] text-center">
            Currently, there&apos;s no member information available.
          </p>
        </div>
      )}

      {showMore && (
        <div className="flex justify-center items-center">
          <Button
            onClick={() => setShowMore(false)}
            variant={VariantTypes.Primary}
            size={SizesTypes.Small}
            className="mt-[40px] max-w-[200px] mx-auto"
          >
            See More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default DisplayAllMembers;
