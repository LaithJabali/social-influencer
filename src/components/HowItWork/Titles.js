import React from 'react';
import styles from './HowItWork.module.css';

const Titles = ({ title, subTitle }) => {
  return (
    <>
      <h1 className={styles.pageTitle}>{title}</h1>
      <h2 className={styles.pageSubtitle}>{subTitle}</h2>
    </>
  );
};

export default Titles;
