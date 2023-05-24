import React from 'react';
import { Row, Col } from 'antd';
import styles from './InfluencersCards.module.css';
import Cards from './Cards';
import { influencersData } from './data';

const InfluencersCards = () => {
  return (
    <div className={styles.container}>
      <Row>
        {influencersData.map((influencer) => (
          <Col key={influencer.name}>
            <Cards
              name={influencer.name}
              description={influencer.description}
              followers={influencer.followers}
              imageSrc={influencer.imageSrc}
              price={influencer.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InfluencersCards;
