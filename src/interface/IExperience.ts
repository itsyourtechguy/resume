type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

type ExperienceProps = {
  experienceData: ExperienceEntry[];
};
