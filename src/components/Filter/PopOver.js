import React, { useState } from 'react';
import { Popover } from 'antd';
import { filterOptions } from './data';
import PopContent from './PopContent';
import CustomButtons from '../CustomButtons';
import styles from './Filter.module.css';
import { buttons } from './data';

const PopOver = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const handleFilterClick = () => setFilterOpen(!isFilterOpen);
  const buttonWithClickHandler = {
    ...buttons[0],
    buttonOnClick: handleFilterClick,
  };

  return (
    <Popover
      content={<PopContent filterOptions={filterOptions} />}
      trigger="click"
      open={isFilterOpen}
      onOpenChange={handleFilterClick}
      placement="bottom"
    >
      <CustomButtons buttons={[buttonWithClickHandler]} buttonClass={styles.filterButton} />
    </Popover>
  );
};

export default PopOver;
