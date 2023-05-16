import React from 'react'
import styles from './ShopInfluencerBox.module.css';
import CustomButtons from '../CustomButtons'

const ShopButton = () => {
  const button = [
    {
      url:'/BrowseInfluencers',
      content: 'Shop Influencers',
      buttonType: 'link'
    }];
  return (
    <CustomButtons buttons={button} buttonClass={styles.button} buttonShape={'round'}/>
  )
}
export default ShopButton