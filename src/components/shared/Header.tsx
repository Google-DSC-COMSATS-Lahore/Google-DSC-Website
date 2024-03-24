"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import RoutesInfo from "@/constants/routes";
import Socials from "@/constants/socials";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    if (!toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <Logo className="z-[100]" />

          {toggle ? (
            <X
              className="relative z-[100] block sm:hidden mt-[6px]"
              onClick={handleToggle}
            />
          ) : (
            <Menu
              className="relative z-[100] block sm:hidden mt-[6px]"
              onClick={handleToggle}
            />
          )}
          <div className="hidden sm:flex justify-center items-center gap-3">
            {Socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="hover:opacity-90 hover:trnasform hover:scale-95 transition-all ease-in-out"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="w-[44px] h-[44px] 2xl:w-[52px] 2xl:h-[52px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      {toggle && (
        <div className="fixed z-[9999] top-[0] pt-[100px] pb-[16px] left-0 right-0 bottom-0 bg-white flex flex-col justify-start items-start">
          <div className="flex-1 w-[94%] flex flex-col justify-start items-center gap-[30px]">
            {RoutesInfo.map((route, i) => (
              <div key={i} className="w-full flex justify-between items-center">
                <Link
                  href={route.url}
                  className={`relative h-full px-[16px] transition-all ease-in-out rounded-[8px] flex justify-center items-center text-[16px]`}
                >
                  {route.name}
                </Link>

                <ArrowUpRight width={18} height={18} color="#4669fa" />
              </div>
            ))}
          </div>

          <div className="w-[94%] mx-auto flex flex-row justify-start items-start gap-3">
            {Socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="hover:opacity-90 hover:trnasform hover:scale-95 transition-all ease-in-out"
              >
                <Image src={item.icon} alt={item.name} width={42} height={42} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
