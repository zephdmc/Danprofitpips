import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompaniesSection = () => {
  // Dummy data for demonstration
  const companies = [
    {
      name: 'Company One',
      logoUrl: 'Paypal.png'
    },
    {
      name: 'Company Two',
      logoUrl: 'visa.png'
    },
    {
      name: 'Company Three',
      logoUrl: 'msc.png'
    },
    {
      name: 'Company Four',
      logoUrl: 'kdbn6a4u.png'
    },
    {
      name: 'Company Five',
      logoUrl: 'btc.png'
    },
    {
      name: 'Company Six',
      logoUrl: 'Apay.png'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">We accept:</h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesSection;
