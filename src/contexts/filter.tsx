'use client';

import React from 'react';
import { useState } from 'react';
import { FiltersInterface } from '@/utils/useQuery';

export const FilterContext = React.createContext({
  filters: {} as FiltersInterface,
  setFilters: (_: FiltersInterface) => {},
});

interface FilterProviderProps {
  children: React.ReactNode;
}

export function FilterProvider({
  children,
}: FilterProviderProps) {
  const [filters, setFilters] = useState<FiltersInterface>(
    {}
  );

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
