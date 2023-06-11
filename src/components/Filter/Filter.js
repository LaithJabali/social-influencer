import React from 'react';
import styles from './Filter.module.css';
import PopOver from './PopOver';
import FilterInput from './FilterInput';
import { FilterProvider } from './FilterContext';
import Influencers from '../InfluencersCards/Influencers';

const Filter = () => {
  return (
    <FilterProvider>
      <div className={styles.filterContainer}>
        <FilterInput />
        <PopOver />
      </div>
      <Influencers />
    </FilterProvider>
  );
};

export default Filter;