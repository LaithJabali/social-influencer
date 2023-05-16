import React from 'react';
import ShopButton from './ShopButton';
import styles from './ShopInfluencerBox.module.css';
import BoxText from './BoxText';

const ShopInfluencerBox = () => {
  return (
    <div className={styles.container}>
        <BoxText />
        <ShopButton />
    </div>
  );
};

export default ShopInfluencerBox;
