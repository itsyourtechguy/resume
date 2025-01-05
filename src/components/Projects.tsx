const Projects = ({ projectsData }: { projectsData: Project[] }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">💡 Projects</h2>
      <div className="space-y-6 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            <a href={project.link}>
            <h3 className="text-lg font-semibold text-teal-400">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                {project.language}
              </span>
              <span className="border border-gray-500 rounded-full px-2 py-1">
                {project.visibility}
              </span>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
