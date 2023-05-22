import { UnorderedListOutlined } from '@ant-design/icons';
import styles from './Filter.module.css';

export const filterOptions = [
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'price',
    label: 'Price',
  },
  {
    value: 'followers',
    label: 'Followers',
  },
  {
    value: 'interests',
    label: 'Interests',
  },
];

export const buttons = [
  {
    url: '',
    content: 'FILTERS',
    buttonType: 'primary',
    buttonShape: 'round',
    buttonIcon: <UnorderedListOutlined className={styles.buttonIcon} />,
  },
];
