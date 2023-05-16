import React from 'react'
import styles from './ShopInfluencerBox.module.css';
import CustomButtons from '../CustomButtons'
import {button} from './data';

const ShopButton = () => {
  return (
    <CustomButtons buttons={button} buttonClass={styles.button} />
  )
}
export default ShopButton