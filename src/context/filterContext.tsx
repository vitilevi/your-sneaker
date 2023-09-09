import React, { ReactNode, createContext, useContext, useState } from 'react';

type FilterContextTypes = {
  filter: string;
  setFilter: (filter: string) => void;
};

const INITIAL_STATE: FilterContextTypes = {
  filter: '',
  setFilter: () => {},
};

const FilterContext = createContext<FilterContextTypes>(INITIAL_STATE);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState(INITIAL_STATE.filter);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a ContextProvider');
  }

  return context;
}
