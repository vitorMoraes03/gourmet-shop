'use client';

import React from 'react';
import { useState } from 'react';
import { FiltersInterface } from '@/utils/useQuery';

export const FilterContext = React.createContext({
  filters: {} as FiltersInterface,
  setFilters: (_: FiltersInterface) => {},
  sortOptions: {} as SortOptionsInterface,
  setSortOptions: (_: SortOptionsInterface) => {},
  mobileFilter: false,
  setMobileFilter: (_: boolean) => {},
});

interface SortOptionsInterface {
  [key: string]: number;
}

interface FilterProviderProps {
  children: React.ReactNode;
}

export function FilterProvider({
  children,
}: FilterProviderProps) {
  const [filters, setFilters] = useState<FiltersInterface>(
    {}
  );
  const [sortOptions, setSortOptions] =
    useState<SortOptionsInterface>({ rating: -1 });
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        sortOptions,
        setSortOptions,
        mobileFilter,
        setMobileFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
