import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import Navbar1 from '../theme/navibar';
import Footer from '../Services/footer';
import ContactHero from '../Services/ContactSection/ContactHero';
import FollowSection from '../Services/Home/follow';
import Topnav from '../Services/Home/topnavbar';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
    location: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwL1L5WENVyPTH0g--YfvtoWNsz_bQJaeQOCG1B3LBUeold1V_7XHh6-lBMC3NahvCIZg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.result === 'success') {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          service: '',
          description: '',
          location: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-black App">
      <Topnav />
      <Navbar1 />
      <ContactHero />
      <div className="bg-white w-full py-12">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center">Let's Get In Touch</h2>
          <div className="w-[3rem] mx-auto px-4 mt-2 h-2 bg-rose-600"></div>
          <p className="text-lg animate-fade-in-up text-black text-gray-500 mb-8 delay-1s">
            We are here to help you. Reach out to us via any of the contact methods below or fill out the form for inquiries.
          </p>
          <div className="grid md:grid-cols-2 justify-center">
            {/* Contact Details */}
            <div>
              <div className="w-full lg:w-full md:w-1/2 p-4">
                <img
                  src="callimage.jpeg"
                  alt="Feature"
                  className="w-full h-full sm:px-[2%] md:px-[5%] rounded object-cover"
                />
              </div>
              <div className="w-full animate-fade-in-up delay-1s lg:p-4">
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
                    <FaWhatsapp className="text-rose-600 mr-2" />
                    <span>+2347067420349</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <SiWechat className="text-rose-600 mr-2" />
                    <span>+2347067420349</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaTwitter className="text-rose-600 mr-2" />
                    <span>@Capitalmoney007</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Inquiry Form */}
            <div className="w-full animate-fade-in-up delay-1s p-4">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Inquiry Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="service">Select Investment</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option>Mini Plan</option>
                      <option>Standard Plan</option>
                      <option>Boom Plan</option>
                      <option>Mega Plan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
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
                {status === 'loading' && <p>Submitting...</p>}
                {status === 'success' && <p className="text-green-600 mt-4">Form submitted successfully!</p>}
                {status === 'error' && <p className="text-red-600 mt-4">Error submitting form. Please try again.</p>}
              </div>
            </div>
          </div>
          <FollowSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsSection;
