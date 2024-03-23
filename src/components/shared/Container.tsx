import React, { FC } from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container:FC<ContainerProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={`${className} max-w-[1920px] mx-auto w-[92%] md:w-[94%] xl:w-[92=6%]`}>
      {children}
    </div>
  );
};

export default Container;
