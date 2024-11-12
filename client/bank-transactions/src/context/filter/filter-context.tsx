import { createContext } from "react";

import { FilterContextProps } from "../../utils/types";

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);
