import React from 'react';
import styles from './ProfileInfo.module.css';
import Nation from './Nation';
import MainInfo from './MainInfo';
import LikesFollowers from './LikesFollowers';
import ProfileImgs from './ProfileImg';
import { useLocation } from 'react-router-dom';

const ProfileInfo = () => {
  const location = useLocation();
  const influencer = location.state?.data;

  return (
    <div className={styles.container}>
      <ProfileImgs influencerInfo={influencer} />
      <div className={styles.profileInfoContainer}>
        <MainInfo mainInformation={influencer} />
        <div className={styles.followersContainer}>
          <LikesFollowers influencerInfo={influencer} />
          <Nation influencerInfo={influencer} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;