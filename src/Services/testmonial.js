import React from 'react';
import { FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const TestimonialSection = () => {
  // Dummy data for demonstration
  const testimonials = [
    {
      name: 'Proven Resilience and Experience',
      role: '',
      testimonial: 'With a journey that started in March 2021, our founders resilience through early setbacks and ultimate success demonstrates a deep understanding of the forex market and a commitment to mastering it.',
      avatar: <FiTrendingUp className="w-14 h-14 " />
    },
    {
      name: 'Expert Guidance and Support',
      role: '',
      testimonial: 'Our team comprises dedicated experts who provide exceptional guidance and support, ensuring you have the resources and insights needed for successful trading',
      avatar: <FiUsers className="w-14 h-14 " />
    },
    {
      name: 'Integrity and Excellence',
      role: '',
      testimonial: 'We uphold the highest standards of integrity and excellence, ensuring that every aspect of our service is geared towards your success and satisfaction in forex trading.',
      avatar: <FiAward className="w-14 h-14 " />
    }
  ];

  return (
    <section className="py-12 bg-gray-800 text-white">

      <div className="mx-auto px-4">
        <p className="text-3xl  text-center mb-2">Why Choose Us</p>
        <h2 className="text-3xl font-semibold text-center mb-8"><strong className='text-rose-600'>Reason For </strong> <strong> Choose Us</strong> </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 'text-rose-600 border-rose-600">
                  <div className='px-4 max-4'> {testimonial.avatar} </div>

                </div>
                <div>
                  <h5 className="text-xl font-bold">{testimonial.name}</h5>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;