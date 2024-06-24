import React, { useEffect } from 'react';
import AOS from 'aos';
const Services = () => {

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
        <><div className=' md:w-full w-full lg:w-lg h-[80rem]  md:h-[50rem] lg:h-[45rem] bg-black'>
            <div className='w-full max-auto '>

                <h3 className=" text-[2rem] md:text-[4rem] lg:text-[4rem] text-white font-bold pt-[2rem] md:pt-[7rem]">Our Investment Plan</h3>
                <div className='w-[9rem] mt-2 mx-auto  h-2 bg-rose-600' cdata-aos="fade-up"
                    data-aos-anchor-placement="center-center"></div>
                <p className="text-sm pb-4 py-2 text-rose-600">Discover a better investment experience</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 px-[10%] md:px-[2%] my-4 w-full h-full justify-between'>
                    <div className='w-[18rem] h-fit bg-white shadow-sm m-2 md:m-2 group' data-aos="zoom-in">
                        <div className='relative overflow-hidden'>
                            <img src='download1.jpg' alt='iaid' className='h-[70%] w-full p-4 ' />
                            <div className='absolute h-full w-full bg-black/20 flex item-center justify-center -bottom-10 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <div className='mt-8'>
                                    <a href='/Contact' className='bg-rose-600 text-white py-2 px-4  mt-4 mx-4 hover:bg-black'>Start</a>
                                    <div className='text-xs px-4 pt-2 text-gray-100 bg-black '>
                                        <p>Minimum Investment: 500$</p>
                                        <p>Maximum Investment: 999$</p>
                                        <p>Percentage Rate: 30% </p>
                                        <p>Duration: I Month</p>
                                        <p>Withdraw: Instantly</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-xl text-rose-600 py-2 font-semibold'>Mini Plan</h1>
                    </div>
                    <div className='w-[18rem] h-fit bg-white shadow-sm m-2 md:m-2 group' data-aos="zoom-in">
                        <div className='relative overflow-hidden'>
                            <img src='download2.jpg' alt='iaid' className='h-[70%] w-full p-4 ' />
                            <div className='absolute h-full w-full bg-black/20 flex item-center justify-center -bottom-10 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <div className='mt-8'>
                                    <a href='/Contact' className='bg-rose-600 text-white py-2 px-4  mt-4 mx-4 hover:bg-black'>Start</a>
                                    <div className='text-xs px-4 pt-2 text-gray-100 bg-black '>
                                        <p>Minimum Investment:1000$</p>
                                        <p>Maximum Investment: 4999$</p>
                                        <p>Percentage Rate: 40% </p>
                                        <p>Duration: I Month</p>
                                        <p>Withdraw: Instantly</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-xl text-rose-600 py-2 font-semibold'>Standard Plan</h1>
                    </div>

                    <div className='w-[18rem] h-fit bg-white shadow-sm m-2 md:m-2 group ' data-aos="zoom-in">
                        <div className='relative overflow-hidden'>
                            <img src='images4.jpg' alt='iaid' className='h-[70%] w-full p-4 ' />
                            <div className='absolute h-full w-full bg-black/20 flex item-center justify-center -bottom-10 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <div className='mt-8'>
                                    <a href='/Contact' className='bg-rose-600 text-white py-2 px-4  mt-4 mx-4 hover:bg-black'>Start</a>
                                    <div className='text-xs px-4 pt-2 text-gray-100 bg-black '>
                                        <p>Minimum Investment: 5000$</p>
                                        <p>Maximum Investment: 9999$</p>
                                        <p>Percentage Rate: 50% </p>
                                        <p>Duration: I Month</p>
                                        <p>Withdraw: Instantly</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-xl text-rose-600 py-2 font-semibold'>Boom Plan</h1>

                    </div>

                    <div className='w-[18rem] h-fit bg-white shadow-sm m-2 md:m-2 group ' data-aos="zoom-in">
                        <div className='relative overflow-hidden'>
                            <img src='bg-4-hero.jpg' alt='iaid' className='h-[70%] w-full p-4 ' />
                            <div className='absolute h-full w-full bg-black/20 flex item-center justify-center -bottom-10 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <div className='mt-8'>
                                    <a href='/Contact' className='bg-rose-600 text-white py-2 px-4  mt-4 mx-4 hover:bg-black'>Start</a>
                                    <div className='text-xs px-4 pt-2 text-gray-100 bg-black '>
                                        <p>Minimum Investment: 10000$</p>
                                        <p>Maximum Investment: Infinity$</p>
                                        <p>Percentage Rate: 100% </p>
                                        <p>Duration: I Month</p>
                                        <p>Withdraw: Instantly</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-xl text-rose-600 py-2 font-semibold'>Mega Plan</h1>
                    </div>
                </div>

                <p className='text-white text-sm md:text-md md:my-6 px-6 lg:my-8'>You get Appreciation Percentage ranging from 10% - 50% depending on the plan you refereeal invested in. The percentage will be addedd to your investment while being paid monthly</p>

            </div>
        </div>
        </>


    );
};

export default Services;
