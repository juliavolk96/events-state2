import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => (
  <div className="list-view">
    {items.map((item, index) => (
      <ShopItem key={index} {...item} />
    ))}
  </div>
);

export default ListView;
