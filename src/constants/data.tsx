import Image from "../Image/Photo.jpeg";
import Resume from "../Ankit Sharma CV.pdf"

// Personal details
export const headerDetails = {
  image: Image,
  name: "Ankit Sharma",
  title: "Full Stack Developer",
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
    duration: "09/2022 – Present",
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
    title: "AP Analyst",
    company: "Genpact",
    location: "Budapest, Hungary",
    duration: "12/2023 - Present",
    responsibilities: [
      "Conducted financial data analysis using SAP, ensuring compliance and accuracy.",
      "Built Power BI dashboards for visualizing financial metrics, aiding decision-making processes.",
      "Streamlined workflows by automating repetitive tasks using SQL and Power BI, increasing efficiency by 30%.",
      "Collaborated with cross-functional teams to ensure alignment on data-driven initiatives.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "E-ship Simplified",
    location: "Indore, India",
    duration: "03/2021 - 09/2022",
    responsibilities: [
      "Led the development of web applications using React, Redux, and Node.js, focusing on scalability and performance.",
      "Created and maintained RESTful APIs to support seamless data communication between frontend and backend.",
      "Integrated MongoDB for efficient data storage and retrieval operations.",
      "Automated testing and deployment processes through CI/CD pipelines using GitLab.",
      "Partnered with UX teams to deliver responsive and user-friendly designs.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company: "Dreammill",
    location: "Indore, India",
    duration: "03/2017 - 02/2020",
    responsibilities: [
      "Built interactive SPAs using ReactJS and managed application state with modern JavaScript (ES6+).",
      "Developed backend services with Node.js and Python for handling server-side logic and data operations.",
      "Designed and implemented secure RESTful APIs, ensuring efficient and reliable data exchange.",
      "Utilized Git for version control and GitLab for continuous integration to enhance team workflows.",
      "Ensured high performance and scalability by optimizing code and application architecture.",
    ],
  },
  //   {
  //     title: "IT Analyst",
  //     company: "Gateway International",
  //     location: "Indore, India",
  //     duration: "06/2016 - 03/2017",
  //     responsibilities: [
  //       "Diagnosed and resolved IT system issues, ensuring minimal downtime and optimal performance.",
  //       "Optimized database integrity and security through proactive maintenance and analysis.",
  //       "Automated routine administrative tasks using scripting, increasing operational efficiency by 20%.",
  //       "Supported database migration projects, ensuring seamless transitions and data accuracy.",
  //     ],
  //   },
];

// Skills
export const skillsData: SkillCategory[] = [
  {
    category: "Development",
    skills: [
      { name: "ReactJS", importance: "high" },
      { name: "Redux", importance: "medium" },
      { name: "JavaScript (ES6+)", importance: "high" },
      { name: "Material-UI", importance: "medium" },
      { name: "Tailwind CSS", importance: "high" },
      { name: "NodeJS", importance: "high" },
      { name: "Express.js", importance: "medium" },
      { name: "RESTful APIs", importance: "high" },
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
    title: "Hangman",
    description: "A classic word guessing game using JavaScript.",
    language: "React + Tailwind",
    visibility: "Public",
  },
  {
    title: "Drum-kit-game",
    description: "A simple game to play drum sounds using keys.",
    language: "JavaScript",
    visibility: "Public",
  },
  {
    title: "simon-challenge-game",
    description: "A fun memory-based game inspired by Simon.",
    language: "JavaScript",
    visibility: "Public",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio showcasing projects and skills.",
    language: "React",
    visibility: "Public",
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
