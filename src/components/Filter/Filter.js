import React from 'react';
import styles from './Filter.module.css';
import PopOver from './PopOver';
import FilterInput from './FilterInput';
import { FilterProvider } from './FilterContext';

const Filter = () => {
  return (
    <FilterProvider>
      <div className={styles.filterContainer}>
        <FilterInput />
        <PopOver />
      </div>
    </FilterProvider>
  );
};

export default Filter;
