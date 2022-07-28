import React, { ReactNode } from "react";

import FilterContext from "../context/FilterContext";
import { useFilter } from "../hooks/useFilter";

interface Props {
  children: ReactNode;
}

export const FilterProvider = ({ children }: Props) => {
  const filter = useFilter();

  return (
    <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
