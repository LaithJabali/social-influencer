import React from 'react';
import styles from './Filter.module.css';
import { useFilterContext } from './FilterContext';

const PopContent = ({filterOptions}) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className={styles.filterOptions}>
      {filterOptions.map((option) => (
        <span
          key={option.value}
          className={selectedFilter === option.value ? styles.activeOption : ''}
          onClick={() => handleFilterChange(option.value)}
        >
          {option.label}
        </span>
      ))}
    </div>
  );
};

export default PopContent;
