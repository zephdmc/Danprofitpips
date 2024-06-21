import React, {  useEffect } from 'react';
import AOS from 'aos';

const ASection = () => {

  // Array of background images

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

  }, []);

  return (
    <div className="bg-black text-white py-16">
      <div className=" mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full p-4">
          <img
            src="EbubePicSeating.jpg"
            alt="About"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full p-4 border-y-2 md:mr-6 lg:mr-8 border-white">
          <h2 className="text-3xl font-bold mb-4 ">Welcome to <strong className='text-rose-600'> Danprofitpips!</strong></h2>
          <div className="text-lg text-md md:text-lg xl:text-2xl text-left px-4 mb-4" data-aos="fade-right">
            <p className='py-2'> At Danprofitpips, we are dedicated to transforming the forex trading experience by offering a reliable and profit-driven trading service.
              Danprofitpips has been at the forefront of forex trading, leveraging extensive market knowledge and experience.</p>
            <p className='py-2'>
              We launched our innovative service, allowing clients to benefit from our trading expertise without the stress of managing their own accounts. I'm proud to say that our clients have consistently enjoyed profitable returns, with zero issues reported since the inception of our service.
            </p>
            <p className='py-2'> Trust and transparency are the cornerstones of our operations. We ensure that all publicly available information is 100% verified.
              Our commitment to excellence and client satisfaction drives us to provide a seamless and profitable trading experience for all our subscribers.
            </p>


          </div>
          <h2 className='px-4 text-md md:text-3xl font-bold'>Uwa Daniel</h2>
          <p className='text-rose-600 text-lg font-bold'>CEO</p>
        </div>
      </div>
    </div>
  );
};


export default ASection;
