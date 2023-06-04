import React from 'react';
import styles from './Promotions.module.css';
import PromotionCard from './PromotionCard';

const PromotionSection = ({ title, promotions, sectionClass }) => {
  return (
    <div className={sectionClass}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.cardRow}>
        {promotions.map((promotion) => (
          <PromotionCard
            key={promotion.title}
            title={promotion.title}
            description={promotion.description}
            price={promotion.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionSection;