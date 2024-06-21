import React from 'react';

const ContactUsHeroSection = () => {
    const backgroundImage = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJhY2tncm91bmR8ZW58MHx8fHwxNjM0MDA4Mzk2&ixlib=rb-1.2.1&q=80&w=1080'; // Demo image URL from Unsplash

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative z-10 text-center p-8 text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-lg animate-fade-in-up delay-1s">
            We are here to help you. Reach out to us via any of the contact methods below or fill out the form for inquiries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsHeroSection;
