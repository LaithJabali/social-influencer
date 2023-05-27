import React from 'react';
import { UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import styles from './ProfileInfo.module.css';
import { influencerInfo } from './data';

const LikesFollowers = () => {
  const spanItems = [
    { key: 'friends', icon: UserAddOutlined, counter: 'friends', label: 'Followers' },
    { key: 'likes', icon: HeartOutlined, counter: 'likes', label: 'LIKES' },
  ];

  return (
    <div>
      {influencerInfo.map(({ numbers }) => (
        <div key={numbers.friends}>
          {spanItems.map(({ key, icon: IconComponent, counter, label }, index) => {
            const counterValue = numbers[counter];
            const spanClass = index === 1 ? styles.iconContainer : '';
            return (
              <span className={spanClass} key={key}>
                <IconComponent className={styles.icon} />
                <span className={styles.counter}>{counterValue}</span>
                <span className={styles.labels}>{label}</span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default LikesFollowers;