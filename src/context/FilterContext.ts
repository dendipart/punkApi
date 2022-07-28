import React from "react";

import { UseFilter } from "../hooks/useFilter";

const FilterContext = React.createContext<UseFilter | null>(null);

export default FilterContext;
