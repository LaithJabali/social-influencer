import React, { useState } from 'react';
import { Button, Input, Select, Popover } from 'antd';
import { UnorderedListOutlined  } from '@ant-design/icons';
import styles from './Filter.module.css';
import CustomButtons from '../CustomButtons';

const { Option } = Select;

const Filter = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleFilterClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Perform search based on the selected filter and search value
      console.log('Selected Filter:', selectedFilter);
      console.log('Search Value:', searchValue);
    }
  };

  const buttons = [
    {
      url: '',
      content: 'FILTERS',
      buttonType: 'primary',
      buttonShape: 'round',
      buttonIcon: <UnorderedListOutlined className={styles.buttonIcon} />,
      buttonOnClick: handleFilterClick
    },
  ];
  const filterOptions = [
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: 'price',
      label: 'Price',
    },
    {
      value: 'followers',
      label: 'Followers',
    },
    {
      value: 'interests',
      label: 'Interests',
    },
  ];
  return (
    <div className={styles.filterContainer}>
      <Input
        placeholder={`Search by ${selectedFilter}`}
        className={styles.searchInput}
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearch}
      />
      <Popover
  content={
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
  }
  trigger="click"
  visible={isFilterVisible}
  onVisibleChange={handleFilterClick}
  placement="bottomRight"
>
  <CustomButtons buttons={buttons} buttonClass={styles.filterButton} />
</Popover>
    </div>
  );
  
};

export default Filter;
