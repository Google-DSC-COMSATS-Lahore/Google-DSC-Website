import React, { FC } from "react";

interface SectionHeaderProps {
  className?: string;
  title: string;
  badge: string;
}

const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { className, title, badge } = props;
  return (
    <div className={`${className}flex flex-col gap-2`}>
      <p className="w-fit bg-black text-white px-[16px] py-[10px] rounded-[12px] text-[16px]">
        {badge}
      </p>
      <h2 className="text-[32px] font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
