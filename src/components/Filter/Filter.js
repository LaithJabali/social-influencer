import React from 'react';
import styles from './Filter.module.css';
import MyPopOver from './MyPopOver';
import FilterInput from './FilterInput';
import { FilterProvider } from './FilterContext';

const Filter = () => {
  return (
    <FilterProvider>
      <div className={styles.filterContainer}>
        <FilterInput />
        <MyPopOver />
      </div>
    </FilterProvider>
  );
};

export default Filter;
