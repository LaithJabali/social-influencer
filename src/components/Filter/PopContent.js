import React from 'react';
import styles from './Filter.module.css';
import { useFilterContext } from './FilterContext';

const PopContent = ({ filterOptions }) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();
  const handleFilterChange = (value) => setSelectedFilter(value);

  return (
    <div className={styles.filterOptions}>
      {filterOptions.map((option) => (
        <a
          key={option.value}
          className={`${selectedFilter === option.value ? styles.activeOption : ''} ${styles.option}`}
          onClick={() => handleFilterChange(option.value)}
          href={'#' + option.value}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
};

export default PopContent;
