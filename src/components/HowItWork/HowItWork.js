import React from 'react';
import styles from './HowItWork.module.css';
import Cards from './Cards';

const HowItWork = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>How It Works</h1>
      <h2 className={styles.pageSubtitle}>Getting started is so simple.</h2>
      <Cards />
    </div>
  );
};

export default HowItWork;
