import React from 'react';
import styles from './InfluencerStatistics.module.css';
import { useParams } from 'react-router-dom';
import StatisticsCard from './StatisticsCard';
import { statisticsData } from './data';

const InfluencerStatistics = () => {
  const { name } = useParams();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DATA INSIGHT</h1>
      <h2 className={styles.subtitle}>{name} Statistics</h2>
      <div className={styles.cardRow}>
        <StatisticsCard statisticsData={statisticsData} />
      </div>
    </div>
  );
};

export default InfluencerStatistics;