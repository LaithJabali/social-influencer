import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfluencersCards.module.css';

const Cards = ({ name, description, followers, imageSrc, price }) => {
  const cardInfo = [
    { className: styles.cardName, content: name },
    { className: styles.cardDescription, content: description },
    { className: styles.cardFollowers, content: `${followers} Followers` },
  ];

  return (
    <Link to="/InfluencerProfile" className={styles.cardLink}>
      <div className={styles.influencerCard}>
        <div className={styles.priceBox}>
          <span className={styles.price}>${price}</span>
        </div>
        <img className={styles.cardImage} src={imageSrc} alt="Influencer" />
        <div className={styles.cardContent}>
          {cardInfo.map((info) => (
            <div key={info.content} className={info.className}>
              {info.content}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Cards;