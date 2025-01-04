import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Certifications from "./components/Certifications";
import {
  headerDetails,
  educationData,
  experienceData,
  skillsData,
  coursesData,
  projectsData,
  certificationsData,
} from "./constants/data";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-7xl w-full">
        <Header details={headerDetails} />
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 text-white p-6"
          style={{
            gridTemplateRows: "auto auto auto",
            gridTemplateColumns: "2fr 1fr 1fr",
          }}
        >
          {/* First Column */}
          <div className="space-y-6 col-span-full md:col-span-2">
            <Experience experienceData={experienceData} />
            <Skills skillsData={skillsData} />
            <Education educationData={educationData} />
          </div>

          {/* Second Column */}
          <div className="space-y-6 col-span-full md:col-span-1">
            <Projects projectsData={projectsData} />
            <Courses coursesData={coursesData} />
            <Certifications certificationsData={certificationsData} />
          </div>
        </div>       
      </div>
    </div>
  );
}

export default App;
