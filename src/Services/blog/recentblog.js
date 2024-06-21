import React, { useEffect, useState } from 'react';
import client from '../../contentfull';
import { formatDate } from '../../Utilitities/fomdate';

const LatestPost = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blog',
          order: '-sys.createdAt',
          limit: 1,
        });
        if (response.items.length > 0) {
          setLatestPost(response.items[0]);
        }
      } catch (error) {
        console.error('Error fetching the latest post:', error);
      }
    };

    fetchLatestPost();
  }, []);

  if (!latestPost) {
    return <div>Loading...</div>;
  }

  const { title, article, author, date, media } = latestPost.fields;

  return (
    <div>
      <h1>{title}</h1>
      {media && media.fields.file.url && (
        <img
          src={`https:${media.fields.file.url}`}
          alt={media.fields.title}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <p>{formatDate(date)}</p>
      <p>By: {author}</p>
      <p>{article.fields?.Paragraph1}</p>
      <p>{article.fields?.Paragraph2}</p><p>{article.fields?.Paragraph3}</p><p>{article.fields?.Paragraph4}</p><p>{article.fields?.Paragraph5}</p>
    </div>
  );
};

export default LatestPost;
