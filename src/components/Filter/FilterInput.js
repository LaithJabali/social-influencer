import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './Filter.module.css';
import { useFilterContext } from './FilterContext';

const FilterInput = () => {
  const { selectedFilter } = useFilterContext();
  const [searchValue, setSearchValue] = useState('');
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
