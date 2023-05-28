import React from 'react';
import {button} from './data';
import styles from './ShopInfluencerBox.module.css';
import BoxText from './BoxText';
import CustomButtons from '../CustomButtons'

const ShopInfluencerBox = () => {
  return (
    <div className={styles.container}>
        <BoxText />
        <CustomButtons buttons={button} buttonClass={styles.button} />
    </div>
  );
};

export default ShopInfluencerBox;
