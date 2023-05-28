import React from 'react';
import styles from './InfluencerStatistics.module.css';
import StatisticsCard from './StatisticsCard';
import { statisticsData } from './data';

const InfluencerStatistics = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DATA INSIGHT</h1> {/* temp */}
      <h2 className={styles.subtitle}>@Zoesennett Statistics</h2> {/* temp */}
      <div className={styles.cardRow}>
        <StatisticsCard statisticsData={statisticsData} />
      </div>
    </div>
  );
};

export default InfluencerStatistics;