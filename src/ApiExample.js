import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';

export default function ApiExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ?
        (
          <p>Loading data...</p>
        ) :
        (<div>
          <h3>{data.count} Public APIs</h3>
          {data.entries.map((entry) => (
            <MyComponent key={entry.API} api={entry} />
          ))}
        </div>
        )}
    </div>
  );
};


