import React from 'react';
import { Input } from 'antd';
import styles from './Filter.module.css';
import { useFilterContext } from './FilterContext';

const FilterInput = () => {
  const { selectedFilter,searchValue, setSearchValue} = useFilterContext();
  const handleSearchChange = (e) => setSearchValue(e.target.value);

  return (
    <Input
      placeholder={`Search by ${selectedFilter}`}
      className={styles.searchInput}
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};

export default FilterInput;