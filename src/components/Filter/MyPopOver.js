import React, { useState } from 'react';
import { Popover } from 'antd';
import { filterOptions } from './data';
import PopContent from './PopContent';
import CustomButtons from '../CustomButtons';
import styles from './Filter.module.css';
import { buttons } from './data';

const MyPopOver = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  const buttonWithClickHandler = {
    ...buttons[0],
    buttonOnClick: handleFilterClick,
  };

  return (
    <Popover
      content={<PopContent filterOptions={filterOptions} />}
      trigger="click"
      visible={isFilterVisible}
      onVisibleChange={handleFilterClick}
      placement="bottom"
    >
      <CustomButtons buttons={[buttonWithClickHandler]} buttonClass={styles.filterButton} />
    </Popover>
  );
};

export default MyPopOver;
