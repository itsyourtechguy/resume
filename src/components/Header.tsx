import { MdEmail } from "react-icons/md";
import { FaDownload, FaGithub, FaGlobe, FaLinkedin, FaPhone } from "react-icons/fa";

const Header = ({ details }: { details: any }) => {
  const { image, name, title, email, githubLink, phone, linkedin, website, resume } = details;

  return (
    <header className="bg-gray-900 text-white flex flex-col items-center py-10">
      {/* Profile Image */}
      <div className="w-44 h-44 rounded-full border-4 border-blue-400 overflow-hidden">
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name and Title */}
      <h1 className="text-3xl font-bold mt-4 text-blue-400">{name}</h1>
      <p className="text-lg text-gray-300">{title}</p>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center items-center mt-6 gap-4">
        <a
          href={`mailto:${email}`}
          className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400"
        >
          <MdEmail className="text-xl" />
          <span className="ml-2">{email}</span>
        </a>
        <a
          href={githubLink}
          className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400"
        >
          <FaGithub className="text-xl" />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          href={linkedin}
          className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400"
        >
          <FaLinkedin className="text-xl" />
          <span className="ml-2">LinkedIn</span>
        </a>
        <a
          href={`tel:${phone}`}
          className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400"
        >
          <FaPhone className="text-xl" />
          <span className="ml-2">{phone}</span>
        </a>
        <a
            href={website}
            className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400"
        > 
          <FaGlobe className="text-xl" />
          <span className="ml-2">Website</span>
        </a>
        <a
            href={resume}
            download="Ankit Sharma CV.pdf"
            className="flex items-center px-4 py-2 border border-gray-500 rounded-full hover:border-blue-400 hover:bg-teal-600"
        > 
          <FaDownload className="text-xl" />
          <span className="ml-2">Download</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
