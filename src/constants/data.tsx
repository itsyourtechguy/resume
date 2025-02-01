import Image from "../Image/photo3.jpeg";
import Resume from "../Ankit Sharma CV.pdf"

// Personal details
export const headerDetails = {
  image: Image,
  name: "Ankit Sharma",
  title: [
    "Front-end Developer",
    "JavaScript Developer",
    "React Developer",
  ],
  email: "ankit260196sharma@gmail.com",
  githubLink: "https://github.com/itsyourtechguy",
  linkedin: "https://www.linkedin.com/in/ankit-sharma-17ba89148/",
  phone: "+36 70 413 7849",
  website: "https://itsyourtechguy.github.io/Portfolio",
  resume: Resume,
};

// Education
export const educationData = [
  {
    title: "M.Sc. in Applied Mathematics",
    institution: "Budapest University of Technology and Economics",
    location: "Budapest, Hungary",
    duration: "09/2022 – 01/2025",
    details: [
      "Non-parametric Statistics, Multivariate Statistics, Statistical Programming Package",
      "Financial Process, Stochastic Process and Analysis",
      "Markov Chains and Probability Theory",
    ],
  },
  {
    title: "B.Sc. in Physics, Mathematics & Geology",
    institution: "Govt. Holkar Science College",
    location: "Indore, India",
    duration: "07/2017 - 10/2020",
    details: ["Physics, Mathematics & Geology"],
  },
];

// Work Details
export const experienceData = [
  {
    title: "Frontend Developer (Part Time)",
    company: "Genpact",
    location: "Budapest, Hungary",
    duration: "12/2023 - Present",
    responsibilities: [
      "Optimized UI components and frontend performance for a seamless user experience.",
      "Developed reusable frontend components to improve workflow efficiency by 30%.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "E-ship Simplified",
    location: "Indore, India",
    duration: "03/2021 - 09/2022",
    responsibilities: [
      "Led the development of web applications using React, Redux, and Node.js, focusing on scalability and performance.",
      "Created and maintained RESTful APIs to support seamless data communication between frontend and backend.",
      " Improved performance by 30% using lazy loading, memoization, and efficient state management.",
      "Automated testing and deployment processes through CI/CD pipelines using GitLab.",
      "Collaborated with UX teams to deliver responsive and user-friendly designs.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Dreammill",
    location: "Indore, India",
    duration: "03/2017 - 02/2020",
    responsibilities: [
      "Built interactive SPAs using ReactJS and managed application state with modern JavaScript (ES6+).",
      "Created responsive layouts and interactive UI components for seamless user interaction.",
      "Integrated RESTful APIs and optimized data-fetching strategies for performance.",
      "Utilized Git for version control and GitLab for continuous integration to enhance team workflows.",
      "Ensured high performance and scalability by optimizing code and application architecture.",
    ],
  },
];

// Skills
export const skillsData: SkillCategory[] = [
  {
    category: "Development",
    skills: [
      { name: "ReactJS", importance: "high" },
      { name: "Redux", importance: "medium" },
      { name: "JavaScript (ES6+)", importance: "high" },
      { name: "TypeScript", importance: "high"},
      { name: "Material-UI", importance: "medium" },
      { name: "Tailwind CSS", importance: "high" },
      { name: "NodeJS", importance: "high" },
      { name: "Express.js", importance: "medium" },
      { name: "RESTful APIs", importance: "high" },
      { name: "Python", importance: "high"},
      { name: "Flask", importance: "low" },
      { name: "Django", importance: "low" },
      { name: "Pandas", importance: "low" },
      { name: "NumPy", importance: "low" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", importance: "high" },
      { name: "MySQL", importance: "medium" },
      { name: "PostgreSQL", importance: "medium" },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "Tableau", importance: "medium" },
      { name: "Power BI", importance: "medium" },
      { name: "Excel", importance: "medium" },
      { name: "Probability", importance: "low" },
      { name: "Statistics", importance: "low" },
      { name: "Regression", importance: "low" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem-solving", importance: "high" },
      { name: "Communication", importance: "medium" },
      { name: "Leadership", importance: "medium" },
      { name: "Adaptability", importance: "medium" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "English (C1)", importance: "high" },
      { name: "Spanish (A2)", importance: "low" },
      { name: "German (A2)", importance: "low" },
      { name: "Hindi (Native)", importance: "medium" },
    ],
  },
];

// Courses
export const coursesData = [
  {
    duration: "07/2024 - 11/2024",
    title: "JavaScript Course (ReactJS)",
    organization: "NIX, Budapest",
  },
  {
    duration: "02/2024 - 06/2024",
    title: "Data Analysis | SQL, Tableau, Power BI & Excel",
  },
  {
    duration: "03/2017 - 07/2017",
    title: "MERN stack (ReactJS, NodeJS, MongoDB)",
  },
  {
    duration: "02/2016 - 08/2016",
    title: "Python: 100 Days of Code",
  },
];

// Projects
export const projectsData = [
  {
    title: "QR Generator",
    description: "Convert your URL in QR code.",
    language: "Node.js",
    visibility: "Public",
    link: "https://github.com/itsyourtechguy/QR-generator",
  },
  {
    title: "Hangman",
    description: "A classic word guessing game using JavaScript.",
    language: "React + Tailwind",
    visibility: "Public",
    link: "https://github.com/itsyourtechguy/hangman-game",
  },
  {
    title: "Drum-kit-game",
    description: "A simple game to play drum sounds using keys.",
    language: "JavaScript",
    visibility: "Public",
    link: "https://github.com/itsyourtechguy/Drum-kit-game",
  },
  {
    title: "simon-challenge-game",
    description: "A fun memory-based game inspired by Simon.",
    language: "JavaScript",
    visibility: "Public",
    link: "https://github.com/itsyourtechguy/simon-challenge-game",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio showcasing projects and skills.",
    language: "React",
    visibility: "Public",
    link: "https://github.com/itsyourtechguy/Portfolio",
  },
];

// Certifications
export const certificationsData = [
  {
    title: "JavaScript Course",
    issuedBy: "NIX Learning and Development Center",
    completionDate: "November 2024",
  },
  {
    title: "Python Basic",
    issuedBy: "HackerRank",
    completionDate: "March 2023",
  },
  {
    title: "Frontend Developer (React)",
    issuedBy: "Meta",
    completionDate: "June 2023",
  },
  {
    title: "React Basic",
    issuedBy: "HackerRank",
    completionDate: "May 2023",
  },
  {
    title: "JavaScript Intermediate",
    issuedBy: "HackerRank",
    completionDate: "April 2023",
  },
  {
    title: "JavaScript Basic",
    issuedBy: "HackerRank",
    completionDate: "March 2023",
  },
  {
    title: "Learn to Program: The Fundamentals",
    issuedBy: "University of Toronto (Coursera)",
    completionDate: "March 2023",
  },
];
