import React, { useContext } from 'react';
import CardsCarousel from '../InfluencersCards/CardsCarousel';
import styles from './InfluencerStatistics.module.css';
import InfluencerContext from '../InfluencersContext';

const MoreCards = () => {
  const influencersData = useContext(InfluencerContext);


  const responsiveSettings = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
      <h1 className={styles.title}>LOOKING FOR MORE?</h1>
      <h2 className={styles.subtitle}>Other Influencers You May Like</h2>
      <CardsCarousel cardsData={influencersData} responsiveSettings={responsiveSettings} />
    </div>
  );
};

export default MoreCards;