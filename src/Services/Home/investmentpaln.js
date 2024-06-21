import React from 'react';

const InvestmentPlans = () => {
    return (
        <div className="bg-white px-[10%] px-6 py-8 pb-2 pb-16 p-gray-600 text-white py-16">
            <div className=" mx-auto px-4">
                <div className="text-left mb-12">
                    <h1 className="text-4xl text-rose-600 font-bold">Investment Plans</h1>
                    <p className="text-lg text-black mt-4">
                        Our investment plans are designed to maximize your returns over a period of 3 to 6 months. Choose the plan that suits you best and start earning today!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 w-full p-4 text-left">
                        <h2 className="text-2xl font-bold mb-4 text-rose-600">How It Works</h2>
                        <p className="text-lg  text-black mb-4">
                            For instance, if you invest $500 and opt for a 3-month plan, you will receive 30% of your $500 investment at the end of each month. In the final month, you will get your 30% along with the initial $500 investment.
                        </p>
                        <p className="text-lg text-black">
                            You don’t have to perform any tasks; simply invest your money and wait for your returns at the end of each month.
                        </p>
                    </div>
                    <div className="md:w-1/4 w-full p-4">
                        <img
                            src="investment.jpeg"
                            alt="Investment Plans"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InvestmentPlans;