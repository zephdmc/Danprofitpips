import React from 'react';

const MapSection = () => {
  return (
    <div className="text-center bg-white">
      <div className="">
        <h1 className="md:text-[2rem] sm:text-md text-black pt-2 md:pt-8 font-bold sm:mb-2 md:mb-2">Join the 1 million people who have already chosen DNPROFITPIPS</h1>
        <p className="md:text-xl text-rose-600 p-4 sm:mb-4 md:mb-8">Regulated accross multiple jurisdictions, I serve clients in over <strong>120 countries </strong></p>
      </div>
      <div className="w-full lg:w-full md:w-1/2 p-4">
        <img 
          src="Section1.png" 
          alt="Full Width and Height" 
          className="w-[60%] h-[40%] md:mx-[15%]  lg:mx-[20%] object-cover "
          />
      </div>
   
      <p className='px-[10%] p-4'>DNPROFITPIPS Investment system was created with the aim of providing quality service for investors. One of the most important aspects of our Investment service is to be able to produce a sustainable profit in the long-term for our clients with the lowest risk exposure.</p>
    </div>
  );
};

export default MapSection;
