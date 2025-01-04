type Skill = {
  name: string;
  importance: "high" | "medium" | "low" | "none";
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};
