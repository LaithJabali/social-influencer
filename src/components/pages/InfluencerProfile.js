import React from 'react';
import { Divider } from 'antd';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Promotions from '../Promotions/Promotions';
import style from './Pages.module.css';
import InfluencerStatistics from '../InfluencerStatistics/InfluencerStatistics';
import MoreCards from '../InfluencerStatistics/MoreCards';

const InfluencerProfile = () => {
  return (
    <>
      <ProfileInfo />
      <Divider className={style.driver} />
      <Promotions />
      <InfluencerStatistics />
      <MoreCards />
    </>
  );
};

export default InfluencerProfile;