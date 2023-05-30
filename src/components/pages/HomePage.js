import React from 'react';
import GetStarted from '../GetStarted/GetStarted';
import HowItWork from '../HowItWork/HowItWork';
import style from './Pages.module.css';
import RightSection from '../GetStarted/RightSection';

const HomePage = () => {
  return (
    <>
      <RightSection />
      <GetStarted />
      <div className={style.howItWork}>
        <HowItWork />
      </div>
    </>
  );
};

export default HomePage;
