import React from 'react';
import styles from './InfluencersCards.module.css';
import CardsCarousel from './CardsCarousel';

const ResponsiveInfluencersCards = ({ influencersData }) => {
  const carousels = [];
  const numberOfCards = 5;
  const responsiveSettings = [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 980,
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

  for (let i = 0; i < influencersData.length; i += numberOfCards) {
    const carouselData = influencersData.slice(i, i + numberOfCards);
    carousels.push(carouselData);
  }

  return (
    <div className={styles.carouselContainer}>
      {carousels.map((cardsData) => (
        <CardsCarousel key={cardsData[0].name} cardsData={cardsData} responsiveSettings={responsiveSettings} />
      ))}
    </div>
  );
};

export default ResponsiveInfluencersCards;