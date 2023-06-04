import React from 'react';
import Images from './Images';
import styles from './ProfileInfo.module.css';

const ProfileImg = ({ influencerInfo }) => {
  return (
    <div className={styles.imageContainer}>
      <Images imgSrc={influencerInfo.imageSrc} imgClass={styles.image} imgAlt={'Influencer Profile'} />
    </div>
  );
}

export default ProfileImg;