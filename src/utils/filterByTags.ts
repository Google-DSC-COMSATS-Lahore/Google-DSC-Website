import Member from "@/types/member";

const FilterByTags = (members: Member[], selectedTag: string) => {
  const filteredMembers = [];

  for (const member of members) {
    const memberTags = member.tags || [];

    const matchedTags = memberTags.some((tag) => tag.name === selectedTag);

    if (matchedTags) {
      filteredMembers.push(member);
    }
  }

  return filteredMembers;
}

export default FilterByTags;