import React from 'react';
import styles from './Promotions.module.css';
import { musicPromotionData, brandPromotionData } from './data';
import PromotionSection from './PromotionSection';

const Promotions = () => {
  const promotionSections = [
    { title: "Music Promotions", promotions: musicPromotionData },
    { title: "Brand Promotions", promotions: brandPromotionData, sectionClass: styles.brand },
  ];

  return (
    <div className={styles.container}>
      {promotionSections.map(({ title, promotions, sectionClass }) => (
        <PromotionSection
          key={title}
          title={title}
          promotions={promotions}
          sectionClass={sectionClass}
        />
      ))}
    </div>
  );
};

export default Promotions;