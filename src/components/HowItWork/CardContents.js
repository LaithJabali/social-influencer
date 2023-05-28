import React from 'react';
import styles from './HowItWork.module.css';

const CardContents = ({ cardTitle, cardDescription, titleClass }) => {
  return (
    <div>
      <h3 className={titleClass}>
        {cardTitle}
      </h3>
      <p className={styles.cardDescription}>{cardDescription}</p>
    </div>
  );
};

export default CardContents;
