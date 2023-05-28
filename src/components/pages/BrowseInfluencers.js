import React from 'react'
import Filter from '../Filter/Filter'
import style from './Pages.module.css'
import Influencers from '../InfluencersCards/Influencers'

const BrowseInfluencers = () => {
  return (
    <div className={style.container}>
      <Filter />
      <Influencers />
    </div>
  )
}

export default BrowseInfluencers