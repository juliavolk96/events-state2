import React from 'react';

const ShopItem = ({ name, price, color, img }) => (
  <div className="shop-item">
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>Price: ${price}</p>
    <p>Color: {color}</p>
  </div>
);

export default ShopItem;
