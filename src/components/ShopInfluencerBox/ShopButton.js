import React from 'react'
import styles from './ShopInfluencerBox.module.css';
import HeaderButtons from '../Header/HeaderButtons'

const ShopButton = () => {
  const button = [
    {
      url:'/BrowseInfluencers',
      content: 'Shop Influencers',
      buttonType: 'link'
    }];
  return (
    <HeaderButtons buttons={button} buttonClass={styles.button} buttonShape={'round'}/>
  )
}
export default ShopButton