import React from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';


const backgroundImage = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJhY2tncm91bmR8ZW58MHx8fHwxNjM0MDA4Mzk2&ixlib=rb-1.2.1&q=80&w=1080'; // Demo image URL from Unsplash

const ServiceDescription = () => (

  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
    <div>Background Image</div>
    <h1 className="text-4xl font-bold mb-12">Our Services3</h1>
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6 m-4">
      <div className="lg:w-1/2 flex justify-center p-4">
        <img
          src={backgroundImage}
          alt="Web Design"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaPaintBrush className="text-blue-500 mr-2" />
          Beautiful and Functional Designs
        </h2>
        <p className="text-gray-700 mb-4">
          At our company, we believe in creating designs that are not only visually appealing but also highly functional. Our design process involves:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-left mb-4">
          <li>Understanding your needs and objectives.</li>
          <li>Researching your target audience and market trends.</li>
          <li>Creating wireframes and prototypes for feedback.</li>
          <li>Designing with the latest tools and technologies.</li>
          <li>Ensuring a responsive and user-friendly interface.</li>
        </ul>
        <p className="text-gray-700">
          Whether it's a static website, an e-commerce platform, or a complex web application, we ensure that our designs are tailored to your specific requirements and provide an exceptional user experience. Let us help you bring your vision to life with a design that stands out and drives results.
        </p>
        <div className="mt-6 flex items-center">
          <FaCode className="text-green-500 mr-2" />
          <span className="text-xl font-semibold">Cutting-Edge Development</span>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceDescription;
