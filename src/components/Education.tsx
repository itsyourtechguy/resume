const Education = ({ educationData }: EducationProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🎓 Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p className="text-teal-400">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
            <p className="text-gray-500 text-sm">{edu.location}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
