// src/App.js
import React, { useEffect, useState } from 'react';
import client from '../../contentfull';
import { Link } from 'react-router-dom';
import { formatDate } from '../../Utilitities/fomdate';
import { truncateText } from '../../Utilitities/Troncate';
const ContentfulApp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await client.getEntries({  content_type: 'blog',
          order: '-sys.createdAt',
          limit: 3, });
          console.log('Fetched data:', response);  // Log the entire response to the console
        setItems(response.items);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>



{/* <section className="  px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">MY BLOG</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
        
        {/* Add more articles here */}
        {/* <article className="shadow rounded-lg overflow-hidden">
          <img src="https://picsum.photos/id/1026/350/200" className="w-full h-48 object-cover" alt="Blog post 2" />
          <div className="p-4 text-right text-justify">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700  mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut sem rhoncus, hendrerit libero eget...</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">May 31, 2020</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">Read More</a>
            </div>
          </div>
        </article>
        <article className="shadow rounded-lg overflow-hidden">
          <img src="https://picsum.photos/id/1027/350/200" className="w-full h-48 object-cover" alt="Blog post 3" />
          <div className="p-4 text-right text-justify">
            <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut sem rhoncus, hendrerit libero eget...</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">May 31, 2020</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">Read More</a>
            </div>
          </div>
        </article>
      </div>
    </section> */}


<h1 className="text-3xl font-bold text-teal-700 text-center mb-8">MY BLOG</h1>
<div className="grid grid-cols-1 md:grid-cols-3 m-4 p-4 gap-4">        {items.map((item) => (
           
            <article className="shadow rounded-lg overflow-hidden">
              
            {item.fields.media && item.fields.media.fields.file.url && (
        <img
          src={`https:${item.fields.media.fields.file.url}`}
          alt={item.fields.media.fields.title}
          className="w-full h-48 object-cover"        />
      )}

          {/* <img src={item.fields.media} className="w-full h-48 object-cover" alt="Blog post 1" /> */}
          <div className="p-4 text-black text-right text-justify">
            <h3 className="text-xl font-bold mb-2"> {item.fields.title}</h3>
            <p className="text-gray-700 mb-4"> {truncateText(item.fields.article, 100)}</p>
            <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{formatDate(item.sys.createdAt)}</p>
                  <Link className='text-teal-700' to={`/items/${item.sys.id}`}>Read More</Link>
            </div>
          </div>
        </article>
        ))}
</div> 
<Link className="text-white p-2 bg-teal-700 hover:bg-black transition duration-500" to={`/AllBlog`}>Read More</Link>

    </div>
  );
};

export default ContentfulApp;
