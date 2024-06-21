import React from 'react';
import AboutSection1 from '../Services/AboutSection/ourcorevalue';
// import TeamSection from '../Services/AboutSection/ourteam';
import Footer from '../Services/footer';
import Navbar1 from '../theme/navibar';
import AboutSection from '../Services/AboutSection/Aboutus';
import AboutHero from '../Services/AboutSection/AboutHero';
import FollowSection from '../Services/Home/follow';
import TestimonialSection from '../Services/testmonial';
import Topnav from '../Services/Home/topnavbar';
function About() {
  return (
    <div className=' bg-black' >
      <Topnav />
      <Navbar1 />
      <AboutHero />
      <AboutSection />
      {/* <AboutNote /> */}
      <AboutSection1 />
      <FollowSection />
      {/* <TeamSection /> */}
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default About;
