import React from 'react';
import styles from './HowItWork.module.css';

const CardImage = ({ imgSrc, imgAlt }) => {
  return (
    <div className={styles.cardImage}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default CardImage;
