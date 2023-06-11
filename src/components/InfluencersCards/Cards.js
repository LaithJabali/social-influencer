import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfluencersCards.module.css';

const Cards = ({ data }) => {
  const { name, description, followers, imageSrc, price } = data;

  const cardInfo = [
    { className: styles.cardName, content: name },
    { className: styles.cardDescription, content: description },
    { className: styles.cardFollowers, content: `${followers} Followers` },
  ];

  const influencerProfileURL = `/InfluencerProfile/${name}`;

  return (
    <Link to={influencerProfileURL} state={{ data: data }} className={styles.cardLink}>
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