import React, { FC } from "react";

import Sizes from "@/constants/buttonSizes";
import SizesTypes from "@/constants/buttonSizesTypes";
import Variants from "@/constants/buttonVariants";
import VariantTypes from "@/constants/buttonVariantTypes";

interface ButtonProps {
  className?: string;
  variant?: VariantTypes;
  size?: SizesTypes;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = VariantTypes.Default,
    size = SizesTypes.Small,
    disabled,
    onClick,
    children,
  } = props;
  const baseClasses = " w-full rounded-[12px] ";

  const variantClasses = Variants[variant];

  const sizeClasses = Sizes[size];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
