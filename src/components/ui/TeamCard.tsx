import React, { FC } from "react";
import Image from "next/image";

// Components
import Button from "./Button";
import Link from "next/link";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

interface TeamCardProps {
  className?: string;
  image: string;
  name: string;
  bio?: string;
  skill: string;
  socials: { name: string; url: string; theme: VariantTypes }[];
}

const TeamCard: FC<TeamCardProps> = (props) => {
  const { className = "", image, name, bio, skill, socials } = props;
  return (
    <div
      className={`${className} border border-[#dadada] bg-[#fff] shadow-md p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="border border-[#dadada] relative w-full h-[86vw] sm:h-[38vw] md:h-[41vw] lg:h-[27vw] xl:h-[28vw] 2xl:h-[20.8vw] 3xl:h-[340px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-[20px] sm:gap-2">
          <h3 className="text-[20px] font-semibold">{name}</h3>
          <div className="flex flex-wrap gap-2">
            <p className="w-fit text-black text-[16px] sm:text-[16px]">
              {skill}
            </p>
          </div>
          {bio && (
            <p className="sm:mt-[12px] text-[16px] sm:text-[16px] text-black leading-[150%]">
              {bio}
            </p>
          )}
        </div>
        <div className="mt-[28px] grid grid-cols-2 gap-[12px]">
          {socials.map((s, i) => (
            <Link key={i} href={s.url} target="_blank">
              <Button variant={s.theme} size={SizesTypes.Small}>
                {s.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
