import React from 'react';
import { FaLaptopCode, FaUsers, FaRocket, FaHandsHelping } from 'react-icons/fa';

const AboutSection1 = () => {
  return (
    <div className="relative isolate bg-gray-100 ">
      <div className=" h-[75rem] md:h-[45rem] lg:h-[23rem]  mx-auto px-4">
        <div className="flex flex-wrap absolute  justify-center mx-[10%] -top-6 bg-white">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6  shadow-lg text-center border-l-2 border-gray-400">
              <FaLaptopCode className="text-4xl text-rose-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">Empowering investores with the knowledge, tools, and support needed to achieve consistent success in the investment market</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6  shadow-lg text-center border-l-2 border-gray-400">
              <FaUsers className="text-4xl text-rose-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">A dedicated group of experts committed to providing exceptional guidance, support, and insights for successful trading</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 shadow-lg text-center border-l-2 border-gray-400">
              <FaRocket className="text-4xl text-rose-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To become a leader in innovative and resilient investment trading, transforming challenges into opportunities for growth.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6  shadow-lg text-center border-l-2 border-gray-400">
              <FaHandsHelping className="text-4xl text-rose-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Upholding integrity, persistence, and excellence in all aspects of trading to ensure our clients' success and satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutSection1;
