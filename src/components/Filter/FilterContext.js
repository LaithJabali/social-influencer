import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const contextValue = {
    selectedFilter,
    setSelectedFilter,
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
