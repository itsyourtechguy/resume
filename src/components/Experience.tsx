const Experience = ({ experienceData }: ExperienceProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📂 Experience</h2>
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <p className="text-teal-400">{job.title}</p>
            <p className="text-gray-400 text-sm">{job.duration}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
              {job.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
