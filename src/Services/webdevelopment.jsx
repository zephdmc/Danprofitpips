import React from 'react';

import Navbar1 from '../theme/navibar';

import Footer from '../Services/footer';
import BundlesDisplay from './OurProduct/webdevpeoduct';
import ServiceDescription from './webservice/webdevesection';
function Webdev1() {
  return (
    <div className="App bg-gray-900">
     
      <Navbar1 className="relative" />
      <ServiceDescription />
     <BundlesDisplay />
      <div className='h-[40rem] m-8'>
        {/* <h1 className='text-white text-xl font-bold bg-gray-500'>Our Services</h1> */}
     
        <Footer />
        </div>
    </div>
  );
}

export default Webdev1;
