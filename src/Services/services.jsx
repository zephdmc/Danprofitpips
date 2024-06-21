import React from 'react';

const ServicesSection = () => {
  return (
    <div className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10rem] gap-4">
      <div className="relative bg-gray-500 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:brightness-50">
        {/* <img src="images4.jpg" alt="Service 1" className="w-full block" /> */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white transform translate-y-full transition duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-xl text-black font-bold">Web Development </h3>
          <p className="text-sm">Description of Service 1</p>
        </div>
      </div>
      <div className="relative bg-gray-500 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:brightness-50">
        {/* <img src="download3.jpg" alt="Service 2" className="w-full block" /> */}
        <div className="absolute bottom-0 z-20 left-0 w-full p-4 bg-black bg-opacity-50 text-white transform translate-y-full transition duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-xl font-bold text-black">Graphics Design </h3>
          <p className="text-sm">Description of Service 2</p>
        </div>
      </div>
      <div className="relative bg-gray-500 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:brightness-50">
        {/* <img src="download1.jpg" alt="Service 3" className="w-full block" /> */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white transform translate-y-full transition duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-xl font-bold text-black">Video Editting</h3>
          <p className="text-sm">Description of Service 3</p>
        </div>
      </div>
      <div className="relative bg-gray-500 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:brightness-50">
        {/* <img src="download2.jpg" alt="Service 4" className="w-full block" /> */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white transform translate-y-full transition duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-xl font-bold text-black">Digital Marketing </h3>
          <p className="text-sm">Description of Service 4</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
