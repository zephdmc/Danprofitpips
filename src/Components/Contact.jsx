import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaTwitter } from 'react-icons/fa';
import Navbar1 from '../theme/navibar';
import Footer from '../Services/footer';
import ContactUsHeroSection from '../Services/ContactSection/contactHeroSection';
import ContactHero from '../Services/ContactSection/ContactHero';
import FollowSection from '../Services/Home/follow';
import Topnav from '../Services/Home/topnavbar';
const ContactUsSection = () => {
  return (
    <div className='bg-black App'>
      <Topnav />
      <Navbar1 />
      <ContactHero />
      {/* <ContactUsHeroSection /> */}
      <div className="bg-white w-full py-12">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center">Lets Get In Touch</h2>
          <div className='w-[3rem] mx-auto px-4 mt-2 mx-2 h-2 bg-rose-600'></div>
          <p className="text-lg animate-fade-in-up text-black text-gray-500 mb-8 delay-1s">
            We are here to help you to Reach out to us via any of the contact methods below or fill out the form for inquiries.
          </p>
          <div className="grid md:grid-cols-2 justify-center">
            {/* Contact Details */}
            <div>
              <div>
                <div className="w-full lg:w-full md:w-1/2 p-4">
                  <img
                    src="callimage.jpeg"
                    alt="Feature Image"
                    className="w-full h-full sm:px-[2%] md:px-[5%] rounded object-cover "
                  />
                </div>
              </div>





              <div className="w-full animate-fade-in-up  delay-1s lg:p-4">
                <div className="bg-white lg:p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                  <div className="flex items-center justify-center mb-4">
                    <FaEnvelope className="text-rose-600 mr-2" />
                    <span>uwadanielc@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <FaPhone className="text-rose-600 mr-2" />
                    <span>+2347067420349</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-rose-600 mr-2" />
                    <span>123 Main St, Anytown, USA</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaTwitter className="text-rose-600 mr-2" />
                    <span>@Capitalmoney007</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Inquiry Form */}
            <div className="w-full animate-fade-in-up  delay-1s p-4">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Inquiry Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="service">Select Investment</label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Mini Plan</option>
                      <option>Standared Plan</option>
                      <option>Boom Plan</option>
                      <option>Mega Plan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block px-6 py-2 bg-rose-600 text-white font-semibold rounded-md shadow-md hover:bg-black transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <FollowSection />
          {/* Google Map */}
          {/* <div className="w-full h-[100%] p-4">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508254!2d144.95373531531635!3d-37.816279779751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ef77b3b0d9b0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1625757472158!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsSection;
