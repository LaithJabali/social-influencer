import React from 'react';
import { UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import styles from './ProfileInfo.module.css';

const LikesFollowers = ({ influencerInfo }) => {
  const { friends, likes } = influencerInfo;
  const spanItems = [
    { key: 'friends', icon: UserAddOutlined, counter: friends, label: 'Followers' },
    { key: 'likes', icon: HeartOutlined, counter: likes, label: 'LIKES' },
  ];

  return (
    <div>
      {spanItems.map(({ key, icon: IconComponent, counter, label }, index) => {
        const spanClass = index === 1 ? styles.iconContainer : '';
        return (
          <span className={spanClass} key={key}>
            <IconComponent className={styles.icon} />
            <span className={styles.counter}>{counter}</span>
            <span className={styles.labels}>{label}</span>
          </span>
        );
      })}
    </div>
  );
};

export default LikesFollowers;