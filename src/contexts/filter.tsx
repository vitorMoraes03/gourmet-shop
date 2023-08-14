'use client';

import React from 'react';
import { useState } from 'react';
import { FiltersInterface } from '@/utils/query/useQuery';

export const FilterContext = React.createContext({
  filters: {} as FiltersInterface,
  setFilters: (
    _:
      | FiltersInterface
      | ((
          prevFilters: FiltersInterface
        ) => FiltersInterface)
  ) => {},
  sortOptions: {} as SortOptionsInterface,
  setSortOptions: (_: SortOptionsInterface) => {},
  mobileFilter: false,
  setMobileFilter: (_: boolean) => {},
});

export interface SortOptionsInterface {
  [key: string]: number;
}

export function FilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
