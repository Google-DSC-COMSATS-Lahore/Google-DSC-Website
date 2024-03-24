import VariantTypes from "@/constants/buttonVariantTypes";

type Member = {
  image: string;
  name: string;
  skill: string;
  bio: string;
  tags?: { name: string; value: string }[];
  socials: {
    name: string;
    url: string;
    theme: VariantTypes;
  }[];
};

export default Member;
