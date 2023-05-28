import React from 'react';
import styles from './InfluencerStatistics.module.css';
import { Card } from 'antd';

const StatisticsCard = ({ statisticsData }) => {
  return (
    <>
      {statisticsData.map((data) => (
        <Card className={styles.card}>
          <div className={styles.cardTitle}>{data.title}</div>
          <div className={styles.description}>{data.description}</div>
          {data.icons && <div className={styles.iconRow}>{data.icons}</div>}
          {data.statistics && (
            <div className={styles.statRow}>
              {data.statistics.map((stat) => (
                <div key={stat.label} className={styles.number}>
                  {stat.number} {stat.label}
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}
    </>
  );
};

export default StatisticsCard;