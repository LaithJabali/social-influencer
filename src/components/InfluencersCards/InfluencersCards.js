import React from 'react';
import { Row } from 'antd';
import styles from './InfluencersCards.module.css';
import Cards from './Cards';
import { useFilterContext } from '../Filter/FilterContext';

const InfluencersCards = ({ influencersData }) => {
  const { selectedFilter, searchValue } = useFilterContext();

  const filteredInfluencers = influencersData.filter((influencer) => {
    if (selectedFilter === 'name') {
      return influencer.name.toLowerCase().includes(searchValue.toLowerCase());
    } else if (selectedFilter === 'interests') {
      return influencer.description.toLowerCase().includes(searchValue.toLowerCase());
    } else if (selectedFilter === 'price') {
      return influencer.price <= parseInt(searchValue);
    } else if (selectedFilter === 'followers') {
      return influencer.followers.toLowerCase().includes(searchValue.toLowerCase());
    }
    return true;
  });

  return (
    <div className={styles.container}>
      <Row>
        {filteredInfluencers.map((influencer) => (
          <Cards key={influencer.id} data={influencer} />
        ))}
      </Row>
    </div>
  );
};

export default InfluencersCards;