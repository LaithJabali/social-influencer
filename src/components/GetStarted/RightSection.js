import React from 'react';
import styles from './GetStarted.module.css';
import { images } from './data';

const RightSection = () => {
  return (
    <div className={styles.RightContainer}>
      {images.map((image) => (
        <div key={image.alt} className={image.className}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default RightSection;