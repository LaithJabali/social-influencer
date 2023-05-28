import React from 'react';
import { Carousel } from 'antd';
import styles from './InfluencersCards.module.css';
import Cards from './Cards';

const CardsCarousel = ({ cardsData, responsiveSettings }) => {
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