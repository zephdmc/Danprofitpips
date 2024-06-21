import React from 'react';

function AboutNote() {
  const backgroundImage = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJhY2tncm91bmR8ZW58MHx8fHwxNjM0MDA4Mzk2&ixlib=rb-1.2.1&q=80&w=1080'; // Demo image URL from Unsplash


  return (
    <div className="relative isolate min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg max-w-prose">
          <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-lg">
            Welcome to Our Project! We are a dedicated team of developers passionate about creating innovative and efficient web solutions. Our mission is to deliver high-quality products that meet the needs of our users and exceed their expectations. With a focus on user experience and performance, we strive to build applications that are not only functional but also delightful to use.
          </p>
          <p className="mt-4 text-lg">
            Our journey began in 2022 with the vision of leveraging the latest technologies to solve real-world problems. Since then, we have worked on numerous projects, each contributing to our growth and expertise. We believe in the power of collaboration and open-source development, and we actively contribute to the community by sharing our knowledge and resources.
          </p>
          <p className="mt-4 text-lg">
            Thank you for visiting our project. We hope you find it useful and engaging. If you have any questions or feedback, please feel free to reach out to us. Together, we can create something amazing!
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#14b8a6] to-[#0f766e] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}

export default AboutNote;

