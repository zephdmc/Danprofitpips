import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://via.placeholder.com/150',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://via.placeholder.com/150',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Mike Johnson',
    position: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Emily Davis',
    position: 'Project Manager',
    image: 'https://via.placeholder.com/150',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },
];

const TeamSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-12">
      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 transform transition duration-500 hover:scale-105"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href={member.twitter} className="text-blue-500 hover:text-blue-700">
                    <FaTwitter size={24} />
                  </a>
                  <a href={member.linkedin} className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.github} className="text-gray-800 hover:text-gray-900">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#14b8a6] to-[#0f766e] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default TeamSection;
