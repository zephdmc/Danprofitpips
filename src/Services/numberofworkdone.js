import React from 'react';
import {  FaChartBar, FaMoneyBillWave, FaRegFolderOpen } from 'react-icons/fa';

const FeatureSection = () => {
  // Dummy data for demonstration
  const features = [
    { title: 'Browse through our various investment plans and select the one that best suits your needs and goals.', count: "Select Your Choice of Plan", icon: <FaRegFolderOpen />,  number: 1  },
    { title: 'Reach out to our support team for assistance with your selection and proceed to make the payment', count: "Make Payment", icon: <FaMoneyBillWave />, number: 2 },
    { title: 'Sit back and relax as we manage your investment. Expect to see your profits each period according to the plan you selected', count: "Wait for Your Profit", icon: <FaChartBar />,  number: 3 },
   
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="mx-auto px-4">
        <p className="text-sm pb-2 text-black md:pt-[2rem] sm:pt-[2rem] lg:pt-[3rem]">How it works</p>
        <div className='w-[9rem] mt-2 mx-auto  h-2 bg-rose-600'></div>
      <h3 className="lg:text-[4rem] md:text-[2rem] sm:text-[1rem] text-black font-bold lg:pb-[3rem] ">Start Your Investment <stong className="text-rose-600"> With Us </stong> </h3>
        <div className="mx-[2%] grid grid-cols-1 sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-5 gap-2">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-col-3 mx-auto md:mx-[10%]  lg:mx-[95%] items-center">
              

              {/* <div className="flex justify-center items-center h-screen bg-gray-100"> */}
      <div className="relative mx-[10%] flex items-center mt-2 md:mt-10 justify-center w-64 h-64 bg-white rounded-full shadow-lg">
        <div className="absolute  flex flex-col items-center text-center">
          <div className="text-yellow-500 text-4xl"> {feature.icon} </div>
          <h2 className="text-lg font-semibold mt-2">{feature.count}</h2>
          <p className="text-sm mt-1">{feature.title}</p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-t-full w-20 h-10 flex justify-center items-center">
          <span className="text-white font-bold">{feature.number}</span>
        </div>
      </div>
              {/* </div> */}
        
            </div>
          ))}
        </div>
        <p className="text-sm pb-4 text-rose-600 md:pt-[4rem] sm:pt-[2rem] lg:pt-[7rem]">Everything you need to Invest in one place</p>

      
      </div>
    </section>
  );
};

export default FeatureSection;
