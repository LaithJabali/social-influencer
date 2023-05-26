import React from 'react';
import { Carousel } from 'antd';
import styles from './InfluencersCards.module.css';
import Cards from './Cards';

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

const CardsCarousel = ({ cardsData }) => {
  return (
    <Carousel className={styles.carousel} arrows={true} responsive={responsiveSettings}>
      {cardsData.map((influencer) => (
        <div key={influencer.name}>
          <Cards
            name={influencer.name}
            description={influencer.description}
            followers={influencer.followers}
            imageSrc={influencer.imageSrc}
            price={influencer.price}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CardsCarousel;