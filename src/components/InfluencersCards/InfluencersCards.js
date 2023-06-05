import React from 'react';
import { Row } from 'antd';
import styles from './InfluencersCards.module.css';
import Cards from './Cards';

const InfluencersCards = ({ influencersData }) => {
  return (
    <div className={styles.container}>
      <Row>
        {influencersData.map((influencer) => (
          <Cards key={influencer.id} data={influencer} />
        ))}
      </Row>
    </div>
  );
};

export default InfluencersCards;