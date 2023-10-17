import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => (
  <div className="cards-view">
    {cards.map((card, index) => (
      <ShopCard key={index} {...card} />
    ))}
  </div>
);

export default CardsView;
