import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import myImage from './Image/Capture.PNG';
const PreviousWorkSection = () => {
  // Dummy data for demonstration
  const works = [
    {
      title: 'School Portal',
      imageUrl: myImage,
      link: 'https://mghso.com.ng'
    },
    {
      title: 'Project Two',
      imageUrl: 'https://source.unsplash.com/random/400x300?website2',
      link: 'https://example.com/website2'
    },
    {
      title: 'Project Three',
      imageUrl: 'https://source.unsplash.com/random/400x300?website3',
      link: 'https://example.com/website3'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Previous Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white border-t-[8px] border-teal-700 transform transition duration-500 hover:scale-105 shadow-lg overflow-hidden">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 flex items-center mb-4"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/previous-work"
            className="inline-block bg-teal-700 text-white px-6 py-2  shadow-md hover:bg-teal-900 transition duration-300"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorkSection;
