import React from 'react';
import styles from './InfluencersCards.module.css';
import { influencersData } from './data';
import CardsCarousel from './CardsCarousel';

const ResponsiveInfluencersCards = () => {
  const carousels = [];
  const numberOfCards = 5;
  
  for (let i = 0; i < influencersData.length; i += numberOfCards) {
    const carouselData = influencersData.slice(i, i + numberOfCards);
    carousels.push(carouselData);
  }

  return (
    <div className={styles.carouselContainer}>
      {carousels.map((cardsData) => (
        <CardsCarousel key={cardsData[0].name} cardsData={cardsData} />
      ))}
    </div>
  );
};

export default ResponsiveInfluencersCards;