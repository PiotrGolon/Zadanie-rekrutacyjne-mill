import { useContext } from "react";

import { FilterContext } from "../context/filter/filter-context";

import { FilterContextProps } from "../utils/types";

export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};
