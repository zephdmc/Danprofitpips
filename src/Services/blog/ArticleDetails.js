import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../contentfull';
import ContentfulApp from './Contentblog';
const ArticleDetail = () => {
  const { id } = useParams();
  const [items, setArticle] = useState(null);
  console.log(id)
  useEffect(() => {
      const fetchArticle = async () => {
        
      try {
        const response = await client.getEntry(id);
          console.log(' Article:', response);
          setArticle(response);
         
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{items.fields.title}</h1>
          <p>{items.fields.Paragraph1}</p>
          <p>{items.fields.Paragraph2}</p>
          <p>{items.fields.Paragrap31}</p>
          <p>{items.fields.Paragraph4}</p>
          <p>{items.fields.Paragraph5}</p>
          <p>{items.fields.Paragraph6}</p>
          {/* Display other fields as needed */}
          <ContentfulApp />
    </div>
  );
};

export default ArticleDetail;
