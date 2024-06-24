import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaHeadset } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';



const DetailSection = () => {
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




    const teamMembers = [
        {
            name: 'Leading',
            position: 'Experience',
            image: <FaRegClock className='h-12 w-12' />,

        },
        {
            name: '4 Years',
            position: 'Successful result',
            image: <FaCheckCircle className='h-12 w-12' />,

        },
        {
            name: '30,400%',
            position: 'Profit made so far',
            image: <FaDollarSign className='h-12 w-12' />,

        },
        {
            name: '24/5',
            position: 'Customer support',
            image: <FaHeadset className='w-12  h-12' />,

        },
    ];
    return (
        <div className="w-full relative isolate mx-auto px-4">
            <div className="grid md:grid-cols-1 bg-black">

                <div className="relative h-[80rem]  md:h-[50rem]   ">
                    <img
                        src='bgdetails.jpeg'
                        alt="About Us"
                        className="w-full h-[79rem] md:h-[40rem] lg:h-[50rem] transition-opacity duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-70 rounded-lg">





                        <div className="relative isolate overflow-hidden bg-gray-500 bg-opacity-40  py-8">
                            <h2 className="text-3xl text-white font-bold text-center mb-8"><strong className='text-rose-600'>Danprofitpips</strong> Investment System</h2>
                            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <div className=" mx-auto px-4" data-aos="flip-up">
                                <div className="flex flex-wrap justify-center">
                                    {teamMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className="w-full sm:w-1/2  lg:w-2/4 p-4 transform transition duration-500 hover:scale-105"
                                        >
                                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                                <div className="w-24 h-24 bg-rose-600 item-center p-6 rounded-full mx-auto mb-4"
                                                >
                                                    {member.image}
                                                </div>
                                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                                <p className="text-gray-600">{member.position}</p>
                                                {/* <div className="mt-4 flex justify-center space-x-4">
                                                    <a href={member.twitter} className="text-blue-500 hover:text-blue-700">
                                                        <FaTwitter size={24} />
                                                    </a>
                                                    <a href={member.linkedin} className="text-blue-700 hover:text-blue-900">
                                                        <FaLinkedin size={24} />
                                                    </a>
                                                    <a href={member.github} className="text-gray-800 hover:text-gray-900">
                                                        <FaGithub size={24} />
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                                <div
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#dc2626] to-[#0f766e] opacity-30"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div> */}
                        </div>





                    </div>
                </div>
            </div>
            {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#14b8a6] to-[#0f766e] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div> */}
        </div>
    );
};

export default DetailSection;
