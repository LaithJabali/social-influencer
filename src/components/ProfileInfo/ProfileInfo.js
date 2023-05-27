import React from 'react';
import styles from './ProfileInfo.module.css';
import Nation from './Nation';
import MainInfo from './MainInfo';
import { influencerInfo } from './data';
import LikesFollowers from './LikesFollowers';
import ProfileImgs from './ProfileImg';

const ProfileInfo = () => {
  return (
    <div className={styles.container}>
      <ProfileImgs influencerInfo={influencerInfo} />
      <div className={styles.profileInfoContainer}>
        <MainInfo mainInformation={influencerInfo} />
        <div className={styles.followersContainer}>
          <LikesFollowers />
          <Nation influencerInfo={influencerInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;