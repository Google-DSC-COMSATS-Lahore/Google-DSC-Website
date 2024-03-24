import VariantTypes from "./buttonVariantTypes";

const Variants: {
  [key: string]: string;
} = {
  [VariantTypes.Default]: "bg-black text-white",
  [VariantTypes.Primary]: "bg-blue text-white",
  [VariantTypes.Ghost]: "bg-ghost text-black",
  [VariantTypes.Danger]: "bg-red text-white",
  [VariantTypes.Warning]: "bg-yellow text-black",
  [VariantTypes.Disabled]: "opacity-80",
  [VariantTypes.Outline]: "bg-white text-black border border-black",
};

export default Variants;
