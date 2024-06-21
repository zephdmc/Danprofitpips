import React from 'react';

const ReasonFor = () => {
    return (
        <div className="bg-white px-[10%] px-6 py-8 text-white ">
            <div className=" mx-auto px-4">
                <div className="text-left mb-12">
                    <h1 className="text-4xl text-rose-600 font-bold">Reasons for This Platform</h1>
                    <p className="text-lg text-black mt-4">
                        Our platform is designed to help you secure money through Forex trading. Learn from my journey and gain the insights needed to succeed in this dynamic market.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 w-full p-4 text-left">
                        <p className="text-lg text-black mb-4">
                            To provide a comprehensive platform where people can learn about Forex trading, benefit from my experiences, and ultimately achieve financial independence.
                        </p>
                        <p className="text-lg text-black">
                            Whether you are new to Forex trading or looking to refine your strategies, our platform is here to support you every step of the way.
                        </p>
                    </div>
                    <div className="md:w-1/4 w-full p-4">
                        <img
                            src="images-4.jpg"
                            alt="Reasons for Platform"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReasonFor;