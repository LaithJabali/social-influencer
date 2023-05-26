import React from 'react';
import { Card } from 'antd';
import styles from './HowItWork.module.css';
import { cardData } from './data';
import CardImage from './CardImage';
import CardContents from './CardContents';

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((item) => (
        <Card key={item.title} className={styles.card}>
          <CardImage imgSrc={item.image} imgAlt={item.title} />
          <CardContents
            cardTitle={item.title}
            cardDescription={item.description}
            titleClass={`${styles.cardTitle} ${item === cardData[1] ? styles.customMargin : ''}`}
          />
        </Card>
      ))}
    </div>
  );
};

export default Cards;
