import React from 'react';
import styles from './Promotions.module.css';
import { Card } from 'antd';

const PromotionCard = ({ title, description, price }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.downSection}>
        <div className={styles.price}>{price}</div>
      </div>
    </Card>
  );
};

export default PromotionCard;