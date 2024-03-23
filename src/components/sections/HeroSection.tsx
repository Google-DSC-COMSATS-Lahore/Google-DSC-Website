import React from "react";

import { CheckCircle, Lightbulb, Mail, Rocket } from "lucide-react";

import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

const HeroSection = () => {
  const data = [
    "lorem ipsum dolor sit amet.",
    "lorem ipsum dolor sit amet consectetur.",
    "lorem ipsum dolor sit amet adipisicing elit.",
    "lorem ipsum.",
  ];

  const badgeStyles = [
    "right-[00px] move-left-right",
    "right-[100px] move-right-left",
    "right-[-100px] move-right-left",
    "",
  ];

  const headingClassNames =
    "uppercase leading-[140%] font-semibold max-w-[500px] md:max-w-[660px] text-[22px] sm:text-[28px] md:text-[40px]";

  return (
    <section className="pt-[160px] flex justify-center items-center">
      <Container>
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-[140px] xl:gap-0">
          <div className="flex flex-col gap-[8px]">
            <h1 className={headingClassNames}>
              Lorem ipsum dolor sit amet consectetur.{" "}
              <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
                Lorem, ipsum!
              </span>
            </h1>
            <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[600px] text-[14px] sm:text-[16px] md:text-[18px] text-[#4d4d4d] leading-[140%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi
              quasi sequi in modi quae harum architecto facilis voluptates
              maxime.
            </p>
            <div className="mt-[24px] max-w-[340px] md:max-w-[450px] w-full flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1 sm:gap-2">
                <Mail
                  width={20}
                  height={20}
                  color="#4d4d4d"
                  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] text-[#4d4d4d]">
                  Lorem ipsum dolor sit amet?
                </p>
              </div>
              <Link
                //TODO: ADD LINK
                href=""
                target="_blank"
                className="max-w-[240px] md:max-w-[280px] w-full mt-[12px] md:mt-[20px]"
              >
                <Button
                  variant={VariantTypes.Warning}
                  size={SizesTypes.Large}
                  className="font-semibold"
                >
                  Join Chapter!
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex justify-center items-center w-full xl:w-[550px] 2xl:w-[660px] 3xl:w-[1000px]">
            <div className="shadow-lg relative border-2 border-gray rounded-[16px] px-[26px] pt-[40px] pb-[26px] bg-[#f6f6f6]">
              <p className="absolute h-[46px] top-[-28px] w-fit bg-[#f3bc54] text-black px-[20px] rounded-[14px] flex justify-center items-center gap-2">
                <span className="text-[18px] pb-1">👀</span>{" "}
                <span className="text-[16px]">Benefits to join</span>
              </p>
              <div className="flex flex-col gap-[20px] w-full max-w-[500px]">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`relative z-[2] w-full h-[70px] flex justify-start items-center gap-3 bg-white border-2 border-gray rounded-[14px] pl-[26px] pr-[36px] ${badgeStyles[index]} shadow-md bottom-0 hover:bottom-[3px] transition-all`}
                  >
                    {index === 0 ? (
                      <CheckCircle
                        key="checkCircle1"
                        width={20}
                        height={20}
                        color="#000"
                        fill="white"
                      />
                    ) : index === 1 ? (
                      <CheckCircle
                        key="checkCircle2"
                        width={20}
                        height={20}
                        color="#000"
                        fill="white"
                      />
                    ) : index === 2 ? (
                      <Lightbulb
                        key="lightbulb"
                        width={24}
                        height={24}
                        color="#000"
                      />
                    ) : index === 3 ? (
                      <Rocket
                        key="rocket"
                        width={24}
                        height={24}
                        color="#000"
                      />
                    ) : null}
                    <p className="text-[18px] text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
