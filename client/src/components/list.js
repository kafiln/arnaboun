import React, { useEffect, useState } from 'react';

const List = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/api/')
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);
  return items.map(item => {
    return (
      <ul key={item.id}>
        <li>{new Date(item.start).toLocaleDateString()}</li>
        <li>{new Date(item.end).toLocaleDateString()}</li>
        <li>{item.difference}</li>
      </ul>
    );
  });
};

export default List;
