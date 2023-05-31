import React from 'react';
import styles from './ProfileInfo.module.css';
import Images from './Images';

const Nation = ({ influencerInfo }) => {
  return (
    <div className={styles.flagContainer}>
      <Images imgSrc={influencerInfo.flag} imgClass={styles.flag} imgAlt={'Flag'} />
      <span className={`${styles.country} ${styles.labels}`}>{influencerInfo.nation}</span>
    </div>
  );
}

export default Nation;