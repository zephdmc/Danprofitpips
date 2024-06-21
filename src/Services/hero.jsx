import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import bhgero2 from './Forex/bg-1-hero.jpg'
import bgHero from './Forex/bg-2-hero.jpg';

const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Array of background images
  const backgrounds = [bgHero, bhgero2];

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    // Function to change background image every 40 seconds
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 40000);
    return () => clearInterval(interval);
  }, [backgrounds]);


  return (
    <div className="relative">
      <div className=' w-full h-[39rem] md:'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,

          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className='grid grid-cols-1 py-8 w-full'>
        <div className='relative p-0 m-0 w-full  h-[40rem]'>
          <div className="sm:hidden opacity-25 backdrop-blur-sm trapezium absolute square h-[33rem] md:h-[39rem] bg-white/30 z-1 w-full item  " data-aos="fade-right" ></div>
          <div className="trapezium absolute square h-[30rem] bg-black bg-opacity-60 2-10 w-[96%] md:w-[90%] my-6 opacity-60" data-aos="fade-right"></div>
          <div className='item-center absolute text-left mx-auto my-auto md:w-[89%] h-[25rem] md:h-[35rem] p-[2px] md:p-2 lg:p-8 z-20'>
            <div className='md:mx-[6%] mx-[3%] my-[5] lg:mx-[10%] mt-[3rem] md:mt-[1px] md:my-[8%] lg:my-[10%]'>
              <h1 className='text-white text-5xl md:text-[4rem] font-bold px-[3rem] md:px-[6rem]  mb-4 '>Investments as unique as you are. Let us craft a plan for your goals</h1>
              <p className='  md:px-[6rem] px-[3rem] mr-[3rem] md:mr-[6rem] text-md text-white mb-4'>Secure your future with confidence, Invest with a trusted partner, Peace of mind in every investment, We prioritize your financial security</p>
              <a href='/Contact' className='bg-rose-600 hover:text-white p-2  mx-[3rem] md:mx-[6rem] hover:bg-black rounded text-black'>Get Started</a>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="trapezium2 sm:hidden md:block square h-[20rem] bg-black z-10 w-[10rem] float-right" data-aos="fade-left"></div>

        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
