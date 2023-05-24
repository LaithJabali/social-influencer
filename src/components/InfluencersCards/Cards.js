import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfluencersCards.module.css';

const Cards = ({ name, description, followers, imageSrc, price }) => {
  return (
    <Link to="/InfluencerProfile" className={styles.cardLink}>
      <div className={styles.influencerCard}>
        <div className={styles.priceBox}>
          <span className={styles.price}>${price}</span>
        </div>
        <img className={styles.cardImage} src={imageSrc} alt="Influencer" />
        <div className={styles.cardContent}>
          <div className={styles.cardName}>{name}</div>
          <div className={styles.cardDescription}>{description}</div>
          <div className={styles.cardFollowers}>{followers} Followers</div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
