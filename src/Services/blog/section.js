import React from 'react'

function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">MY BLOG</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="shadow rounded-lg overflow-hidden">
          <img src="https://picsum.photos/id/1025/350/200" className="w-full h-48 object-cover" alt="Blog post 1" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut sem rhoncus, hendrerit libero eget...</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">May 31, 2020</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">Read More</a>
            </div>
          </div>
        </article>
        {/* Add more articles here */}
        <article className="shadow rounded-lg overflow-hidden">
          <img src="https://picsum.photos/id/1026/350/200" className="w-full h-48 object-cover" alt="Blog post 2" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut sem rhoncus, hendrerit libero eget...</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">May 31, 2020</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">Read More</a>
            </div>
          </div>
        </article>
        <article className="shadow rounded-lg overflow-hidden">
          <img src="https://picsum.photos/id/1027/350/200" className="w-full h-48 object-cover" alt="Blog post 3" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut sem rhoncus, hendrerit libero eget...</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">May 31, 2020</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">Read More</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogSection
