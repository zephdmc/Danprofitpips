import React from 'react';
// import { Link } from 'react-router-dom';


const ContactHero = () => {

  return (
    <div className="relative isolate lg:h-[13rem]  md:h-[10rem]  h-[13rem] w-full mx-auto px-4">
      <div className=" bg-black">

        <div className="relative">
          <img
            src='bgdetails.jpeg'
            alt="About Us"
            className="w-full h-[13rem] transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 rounded-lg">
            <div className='flex justify-between w-full md:mx-[10] lg:mx-[20%] '> <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white z-20">Contact Us</h3> <div className='flex'><a href='/' className='text-rose-600 hover:text-white px-2'>Home /</a> <p className='text-white hover:text-white px-2'>Contact Us</p></div></div>

          </div>

        </div>
      </div>
      {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#09090b] to-[#09090b] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </div>
  );
};

export default ContactHero;
