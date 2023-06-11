import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const contextValue = {
    selectedFilter,
    setSelectedFilter,
    searchValue,
    setSearchValue,
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};