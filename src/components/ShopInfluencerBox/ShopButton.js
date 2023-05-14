import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './ShopInfluencerBox.module.css';

const ShopButton = () => {
  return (
    <Link key={'ShopButton'} to={'/BrowseInfluencers'}>
         <Button className={styles.button} type='link' shape='round'>Shop Influencers</Button>
    </Link>
  )
}
export default ShopButton