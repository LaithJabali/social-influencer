import React from 'react';
import GetStarted from '../GetStarted/GetStarted';
import HowItWork from '../HowItWork/HowItWork';
import RightSection from '../GetStarted/RightSection';

const HomePage = () => {
  return (
    <>
      <RightSection />
      <GetStarted />
      <HowItWork />
    </>
  );
};

export default HomePage;
