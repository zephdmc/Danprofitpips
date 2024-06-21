// src/App.js
import React, { useEffect, useState } from 'react';
import client from '../../contentfull';
import { Link } from 'react-router-dom';
import { formatDate } from '../../Utilitities/fomdate';
import { truncateText } from '../../Utilitities/Troncate';
const AllBlog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await client.getEntries({  content_type: 'blog',
           });
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


<h1 className="text-3xl font-bold text-center mb-8">MY BLOG</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">        {items.map((item) => (
           
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
                  <Link to={`/items/${item.sys.id}`}>Read More</Link>
            </div>
          </div>
        </article>
        ))}
</div>    </div>
  );
};

export default AllBlog;
