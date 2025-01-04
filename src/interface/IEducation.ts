type EducationEntry = {
  title: string;
  institution: string;
  location: string;
  duration: string;
  details: string[];
};

type EducationProps = {
  educationData: EducationEntry[];
};
