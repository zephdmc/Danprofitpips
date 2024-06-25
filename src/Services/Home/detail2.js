import React from 'react';

const DetalSection2 = () => {
    return (
        <div className=" mx-auto bg-gray-100 p-4">
            <div className="grid md:grid-cols-2  block items-center">
                <div className="w-full lg:w-full md:w-1/2 p-4">
                    <img
                        src="bghero1.jpeg"
                        alt="Feature"
                        className="w-full h-full sm:px-[2%] md:px-[5%] object-cover "
                    />
                </div>
                <div className="w-full  py-8 ">
                    <h2 className="text-2xl font-semibold text-left px-10 mb-2">Transforming Investment Trading: Reliable, Profit-Driven Service with Proven Expertise and Transparency</h2>
                    <p className="text-lg  text-left text-gray-900 px-10"><strong className='text-rose-600'>Danprofitpips</strong> is dedicated to transforming the forex trading experience by offering a reliable and profit-driven investment trading service. Recognizing the volatility of the forex market and the challenges faced by individuals who have lost their investments, Danprofitpips has developed a solution to help traders regain confidence and achieve consistent profits.

                        Since mid-2021, Danprofitpips has been at the forefront of forex trading, leveraging extensive market knowledge and experience. In October 2022, we launched our innovative service, allowing clients to benefit from our trading expertise without the stress of managing their own accounts. Our clients have consistently enjoyed profitable returns, with zero issues reported since the inception of our service.

                        Understanding the importance of trust and transparency in investments, Danprofitpips ensures that all publicly available information is 100% verified. Our commitment to excellence and client satisfaction drives us to provide a seamless and profitable investment experience for all our subscribers.

                        Join Danprofitpips today and experience the advantages of professional Investment, receiving your profits monthly without the hassle of active trading.</p>
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

export default DetalSection2;
