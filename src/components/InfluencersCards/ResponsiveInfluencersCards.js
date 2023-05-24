import React from 'react';
import styles from './InfluencersCards.module.css';
import { influencersData } from './data';
import CardsCarousel from './CardsCarousel';

const ResponsiveInfluencersCards = () => {
  const halfLength = Math.ceil(influencersData.length / 2);
  const firstHalf = influencersData.slice(0, halfLength);
  const secondHalf = influencersData.slice(halfLength);

  return (
    <div className={styles.carouselContainer}>
      <CardsCarousel cardsData={firstHalf} />
      <CardsCarousel cardsData={secondHalf} />
    </div>
  );
};

export default ResponsiveInfluencersCards;
