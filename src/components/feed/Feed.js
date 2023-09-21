import React, { useEffect, useState } from 'react';
import ContentBlock from '../contentblock/ContentBlock';

const Feed = () => {
  const [contentBlocks, setContentBlocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/content')
      .then(response => {
        if(!response.ok){
          throw new Error('HTTP error. Status: ${response.status}');
        }
        return response.json();
      })
      .then(data => setContentBlocks(data))
      .catch(error => {
        console.error('Error:', error);
        setError(error.toString());
      });
  }, []);

  return (
    <div className="feed">
      {error ? ( // If there's an error, display it
        <div>Error: {error}</div>
      ) : (
        contentBlocks.map((block, index) => (
          <ContentBlock key={index} text={block.context} />
        ))
      )}
    </div>
  );
};

export default Feed;
