import React, { FC } from "react";
import Image from "next/image";
import Member from "@/types/member";

interface MemberProps {
  className?: string;
  member: Member;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

const Member: FC<MemberProps> = (props) => {
  const { className, member } = props;
  const { image, name, skill, bio, tags } = member;

  return (
    <div
      className={`${className} border border-[#dadada] bg-[#fff] shadow-md rounded-[20px] flex flex-col overflow-hidden`}
    >
      <div className="relative w-full h-[180px] mb-[140px] sm:mb-[120px] bg-black px-[16px]">
        <div className="h-full flex justify-end items-end pb-[16px]">
          <div className="absolute top-[64px] sm:top-auto left-[50%] right-[50%] transform translate-x-[-50%] sm:translate-x-0 sm:left-[24px] sm:right-auto bottom-[-120px] border-[8px] border-solid border-[#fff] w-[240px] h-[240px] sm:w-[240px] sm:h-[240px] rounded-[18px] overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div className="hidden sm:flex relative z-[1] flex-row lg:flex-col xl:flex-row flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <p
                key={index}
                className="w-fit bg-[#5e5e5e] text-white rounded-[8px] px-[12px] py-[8px] text-[14px]"
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="p-[16px] sm:p-[24px] flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[8px] sm:gap-2">
            <h3 className="text-[20px] font-semibold">{name}</h3>
            <div className="flex flex-wrap gap-2">
              <p className="w-fit text-black text-[16px] sm:text-[16px]">
                {skill}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[16px] relative z-[1] flex sm:hidden flex-row lg:flex-col xl:flex-row flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <p
              key={index}
              className="w-fit bg-black text-white rounded-[8px] px-[12px] py-[8px] text-[14px]"
            >
              {tag.name}
            </p>
          ))}
        </div>
        <p className="flex-1 mt-[16px] text-[16px] sm:text-[16px] text-black leading-[150%]">
          {truncateText(bio, 220)}
        </p>
      </div>
    </div>
  );
};

export default Member;
