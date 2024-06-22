import React from 'react';



const AboutSection = () => {


  return (
    <div className="relative isolate mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 bg-black">
        <div className="flex flex-col justify-center">
          <div className='mt-[3rem] mx-[1rem] md:mx-[3rem] lg:mx-[7rem] border-y-2 border-white'>
            {/* <h2 className="text-4xl text-white font-bold mt-[4rem] mb-4">About Us</h2> */}
            <p className="text-md md:text-md lg:text-lg text-gray-200 mb-[1rem] mb:mb-[2rem] lg:mb-[4rem] p-4 text-left">
              Danprofitpips, where passion meets precision in the world of forex trading investment. Our journey began in March 2021, when a curious spark ignited a deep exploration into the intricate world of forex. Introduced by a friend, our founder initially navigated the demo accounts and delved into the diverse opinions and experiences people shared about forex trading. Recognizing the complexity and the potential, he embarked on this journey with determination and resilience.

              By May 2021, bolstered by his growing expertise, he ventured into the real market with a modest investment of $100. Despite initial setbacks and significant losses, which tested his emotional fortitude and discipline, he remained undeterred. The turning point came in November 2021, when a steadfast friend, believing in his relentless dedication, provided crucial support of $500.

              This second chance marked the beginning of a remarkable transformation. Through perseverance, continuous learning, and strategic trading, Danprofitpips emerged as a notable name in the forex community. Today, we stand as a testament to the power of persistence and informed trading. Join us as we continue to navigate the dynamic world of forex, turning challenges into opportunities and fostering growth for all our clients.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src='_MG_0065.jpg'
            alt="About Us"
            className="w-full h-auto transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute w-full  inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          </div>
        </div>
      </div>
      {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#dc2626] to-[#dc2626] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </div>
  );
};

export default AboutSection;
