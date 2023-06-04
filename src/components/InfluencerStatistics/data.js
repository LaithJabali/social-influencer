import styles from './InfluencerStatistics.module.css';
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

export const statisticsData = [
  {
    title: 'Social',
    description: 'Other social platforms this influencer is active on',
    icons: [
      { icon: <FacebookFilled className={styles.icon} />, label: 'facebook' },
      { icon: <TwitterOutlined className={styles.icon} />, label: 'twitter' },
      { icon: <InstagramOutlined className={styles.icon} />, label: 'instagram' }
    ],
  },
  {
    title: 'Engagement',
    description: 'Influencer’s highest engagement on a video.',
    statistics: [
      { number: '1,796,147', label: 'LIKES' },
      { number: '8,470', label: 'COMMENTS' },
      { number: '96%', label: 'ENGAGEMENT RATE' }
    ],
  },
  {
    title: 'Promos',
    description: 'Analytical history of this influencer’s promotions.',
    statistics: [
      { number: '0', label: 'SUCCESSFUL PROMOS' },
      { number: '0', label: 'PROMOS THIS WEEK' }
    ],
  }
];