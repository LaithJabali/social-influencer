import React from 'react';
import CardsCarousel from '../InfluencersCards/CardsCarousel';
import { influencersData } from '../InfluencersCards/data';
import styles from './InfluencerStatistics.module.css';

const MoreCards = () => {
  const responsiveSettings = [
    {
      breakpoint: 2800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className={styles.moreCards}>
      <CardsCarousel cardsData={influencersData} responsiveSettings={responsiveSettings} />
    </div>
  );
};

export default MoreCards;