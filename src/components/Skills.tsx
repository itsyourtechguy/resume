const Skills = ({ skillsData }: { skillsData: SkillCategory[] }) => {
  const getColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-green-500 text-gray-900";
      case "medium":
        return "bg-blue-500 text-gray-900";
      case "low":
        return "bg-purple-500 text-gray-900";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">💻 Skills</h2>
      <div className="space-y-6">
        {skillsData.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-teal-400">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {skillCategory.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getColor(
                    skill.importance
                  )}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
