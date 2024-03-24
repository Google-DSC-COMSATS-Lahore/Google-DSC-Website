import React from "react";
import Link from "next/link";

// Components
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import VariantTypes from "@/constants/buttonVariantTypes";
import SizesTypes from "@/constants/buttonSizesTypes";

const TeamHeroSection = () => {
  const headingClassNames =
    "uppercase leading-[140%] font-semibold max-w-[500px] md:max-w-[660px] text-[22px] sm:text-[28px] md:text-[40px]";

  return (
    <section className="pt-[120px] flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-[20px] lg:gap-0 lg:flex-row lg:justify-between lg:items-end">
          <div className="flex flex-col gap-[8px]">
            <h1 className={headingClassNames}>
              Lorem ipsum dolor sit{" "}
              <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
                Lorem, ipsum!
              </span>
            </h1>
            <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[500px] text-[14px] sm:text-[16px] md:text-[18px] text-[#4d4d4d] leading-[140%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              tempore sapiente neque iusto aut ducimus.
            </p>
          </div>
          <Link
            className="w-full max-w-[200px]"
            target="_blank"
            //TODO: ADD LINK
            href=""
          >
            <Button variant={VariantTypes.Default} size={SizesTypes.Small}>
              Become a member
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TeamHeroSection;
