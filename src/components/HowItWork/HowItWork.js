import React from 'react';
import styles from './HowItWork.module.css';
import Cards from './Cards';
import Titles from './Titles';

const HowItWork = () => {
  return (
    <div className={styles.container}>
      <Titles title={'How It Works'} subTitle={'Getting started is so simple.'} />
      <Cards />
    </div>
  );
};

export default HowItWork;
