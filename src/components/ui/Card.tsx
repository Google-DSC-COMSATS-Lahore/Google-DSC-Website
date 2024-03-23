import React, { FC } from "react";
import Image from "next/image";

// Components
import Button from "./Button";
import Link from "next/link";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

interface CardProps {
  className?: string;
  image: string;
  title: string;
  descripton: string;
  labels: string[];
  url: string;
}

const Card: FC<CardProps> = (props) => {
  const { className = "", image, title, descripton, labels, url } = props;
  return (
    <div
      className={`${className} border border-[#dadada] bg-[#fff] shadow-md p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="relative w-full h-[86vw] sm:h-[38vw] md:h-[41vw] lg:h-[27vw] xl:h-[28vw] 2xl:h-[20.8vw] 3xl:h-[340px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-[20px] sm:gap-2">
          <h3 className="text-[20px] leading-[140%] font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {labels.map((label, i) => (
              <p
                key={i}
                className="w-fit bg-[#ebebeb] text-black rounded-[8px] px-[12px] py-[8px] text-[16px] sm:text-[16px]"
              >
                {label}
              </p>
            ))}
          </div>
          <p className="sm:mt-[16px] text-[16px] sm:text-[18px] text-black">
            <span className="font-semibold text-[20px] mt-[2px]">📅 </span>

            Date: {descripton}
          </p>
        </div>
        <Link href={url} target="_blank">
          <Button
            variant={VariantTypes.Default}
            size={SizesTypes.Small}
            className="mt-[40px] sm:mt-[16px]"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
