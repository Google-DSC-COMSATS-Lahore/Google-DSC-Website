"use client";

import React, { useState } from "react";

// Components
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TeamHeroSection from "../../components/team/TeamHeroSection";
import DisplayAllMembers from "../../components/team/DisplayAllMembers";
import Container from "@/components/shared/Container";

import Members, { hierarchyTags } from "@/mocks/members";
import FilterByTags from "@/utils/filterByTags";

const Page = () => {
  const [selectedMember, setSelectedMember] = useState([...Members]);

  const handleTagClick = (tag: { name: string; value: string }) => {
    const filteredMembers = FilterByTags(Members, tag.name);
    setSelectedMember(filteredMembers);
  };

  return (
    <main className="min-h-[100vh] sm:min-h-[95vh] bg-[#f6f6f6] sm:m-[20px] sm:rounded-[16px] flex flex-col gap-[160px] pt-[20px] pb-[20px] sm:py-[30px]">
      <div className="flex-1">
        <Header />
        <TeamHeroSection />
        {Members?.length > 0 && (
          <Container className="mt-[20px]">
            <div className="flex justify-start items-center gap-2">
              {hierarchyTags.map((tag, index) => (
                <button
                  key={index}
                  className={`w-fit bg-[#ebebeb] text-black rounded-[8px] px-[12px] py-[8px] text-[14px] md:text-[16px] sm:text-[16px]`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </Container>
        )}
        <DisplayAllMembers members={selectedMember} />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
