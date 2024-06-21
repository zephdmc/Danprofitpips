import React from 'react';
import HeroSection from '../Services/hero';
import Navbar1 from '../theme/navibar';
import ServicesSection from '../Services/services';
import Services from '../Services/Server';
import Footer from '../Services/footer';
import FeatureSection from '../Services/numberofworkdone';
import TestimonialSection from '../Services/testmonial';
// import FAQSection from '../Services/fsq';
import CompaniesSection from '../Services/logosection';
import MapSection from '../Services/Home/mapsection';
import ASection from '../Services/Home/welcomeNote';
import AboutSection1 from '../Services/AboutSection/ourcorevalue';
import Topnav from '../Services/Home/topnavbar';
import DetailSection from '../Services/Home/detailSection';
import DetalSection2 from '../Services/Home/detail2';
import FollowSection from '../Services/Home/follow';
import ReasonFor from '../Services/Home/ResonForPlatform';
import InvestmentPlans from '../Services/Home/investmentpaln';
function Home() {
  return (
    <div className="App bg-black">
      <Topnav />
      <Navbar1 className="relative" />
      <HeroSection />
      {/* <div className='h-[40rem] m-8'> */}
      {/* <h1 className='text-white text-xl font-bold bg-gray-500'>OurServices</h1> */}
      {/* <ServicesSection /> */}
      <ASection />
      <AboutSection1 />
      <DetalSection2 />
      <DetailSection />
      <ReasonFor />
      <InvestmentPlans />
      <div className='bg-gray-400 h-[1px] w-full'></div>
      {/* <PreviousWorkSection /> */}
      <MapSection />
      <FeatureSection />

      <ServicesSection />
      <Services />
      <FollowSection />
      <CompaniesSection />
      {/* <FAQSection /> */}
      <TestimonialSection />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Home;
