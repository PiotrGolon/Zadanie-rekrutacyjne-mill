import { useState } from "react";

import { FilterContext } from "./filter-context";

import { FilterProviderProps } from "../../utils/types";

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
