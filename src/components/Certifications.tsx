const Certifications = ({
  certificationsData,
}: {
  certificationsData: Certification[];
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📜 Certifications</h2>
      <div className="space-y-6 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col"
          >
            <h3 className="text-lg font-semibold text-teal-400">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{cert.issuedBy}</p>
            <p className="text-gray-300 text-sm mt-1">
              Completion Date: {cert.completionDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
