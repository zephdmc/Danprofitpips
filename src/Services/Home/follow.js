import React from 'react';

const FollowSection = () => {
    return (
        <div className=" mx-auto bg-white p-4">
            <div className="grid md:grid-cols-2 mx-[15%] block items-center">
                <div className="w-full  py-8 ">
                    <div className='px-10 mb-2 flex text-gray-400 text-left'><h1 >DANPROFITPIPS</h1><div className='w-[3rem] mt-2 mx-2 h-2 bg-rose-600'></div></div>
                    <h2 className="text-2xl font-semibold text-left px-10 mb-2">Follow Us On Facebook</h2>
                    <p className="text-lg  text-left text-gray-900 px-10"> Join our Facebook Community and get the latest news from the financial world</p>
                    <a href='https://www.facebook.com/profile.php?id=61554208622818https://www.facebook.com/profile.php?id=61554208622818' className='float-left mx-10 bg-rose-600 p-2 text-white rounded hover:text-white hover:bg-black' >Open Facebook</a>
                </div>

                <div className="w-full lg:w-full md:w-1/2 p-4">
                    <img
                        src="Follow.png"
                        alt="Feature "
                        className="w-full h-full sm:px-[2%] md:px-[5%] object-cover "
                    />
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
    );
}

export default FollowSection;
