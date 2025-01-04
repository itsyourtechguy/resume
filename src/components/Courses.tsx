const Courses = ({ coursesData }: { coursesData: Course[] }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📚 Courses</h2>
      <div className="space-y-6 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700">
        {coursesData.map((course, index) => (
          <div key={index}>
            <p className="text-sm text-gray-400">{course.duration}</p>
            <h3 className="text-lg font-medium text-teal-400">
              {course.title}
            </h3>
            {course.organization && (
              <p className="text-sm text-gray-500">{course.organization}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
