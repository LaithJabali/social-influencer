import React from 'react';
import styles from './ProfileInfo.module.css';
import Images from './Images';

const Nation = ({ influencerInfo }) => {
  return (
    <div className={styles.flagContainer}>
      <Images imgSrc={influencerInfo[0].country.flag} imgClass={styles.flag} imgAlt={'Flag'} />
      <span className={`${styles.country} ${styles.labels}`}>United States</span>
    </div>
  );
}

export default Nation;