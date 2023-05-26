import React from 'react';
import { Button } from 'antd';
import styles from './Filter.module.css';
import { useFilterContext } from './FilterContext';

const PopContent = ({ filterOptions }) => {
  const { selectedFilter, setSelectedFilter } = useFilterContext();
  const handleFilterChange = (value) => setSelectedFilter(value);

  return (
    <div className={styles.filterOptions}>
      {filterOptions.map((option) => (
        <Button
          key={option.value}
          className={`${selectedFilter === option.value ? styles.activeOption : ''} ${styles.option}`}
          onClick={() => handleFilterChange(option.value)}
          type={selectedFilter === option.value ? 'primary' : 'link'}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default PopContent;
