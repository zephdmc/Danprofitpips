import React, { useState } from 'react';
// import { Link } from 'react-router-dom';



const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (<nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
            <div className="flex items-center text-rose-600 justify-between h-16">
                <div className="flex items-center">
                    <button to="/" className=" text-xl font-bold"> Danprofitpips
                    </button>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a
                            href="/" className="hover:border-b-2 hover:border-white hover:text-rose-600 px-3 py-2  text- sm font-medium" >
                            Home
                        </a>
                        <a
                            href="/About" className=" hover:border-b-2 hover:border-rose-600 hover:text-rose-600 px-3 py-2  text- sm font-medium">About </a>

                        <a
                            href="/Contact" className=" hover:border-b-2 hover:border-rose-600 hover:text-rose-700 px-3 py-2 text- sm font-medium" >Contact </a>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                        type="button" onClick={toggleNavbar}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text
-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false" >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                            <path
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg
                            className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                            <path
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div
            className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
            id="mobile-menu" >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px
-3">
                <a
                    href="/" className=" hover:bg-rose-600 text-rose-600  hover:text-white block px-3 py-2 
text-base font-medium"
                >Home
                </a>
                <a
                    href="/About" className=" hover:bg-rose-600 text-rose-600  hover:text-white block px-3 py-2 
text-base font-medium" >About </a>

                <a
                    href="/Contact" className=" hover:bg-rose-600 text-rose-600  hover:text-white block px-3 py-2 
text-base font-medium" >Contact </a>
            </div>
        </div>
    </nav>
    );
};
export default Navbar1;