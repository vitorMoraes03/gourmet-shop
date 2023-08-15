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
  clearInputs: false,
  setClearInputs: (_: boolean) => {},
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
  const [clearInputs, setClearInputs] = useState(false); // CLEAR INPUT PROBLEMATIC

  // Clear input é um 'remendo' e precisa ser alterado. Os links da nav, renderizam
  // produtos sem se lidar com o Filter. Mas o comportamento geral da app e alterar
  // o filter primeiro, para modificar os produtos renderizados.

  // Não faria mais sentido, os links trabalharem com filter diretamente???

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        sortOptions,
        setSortOptions,
        mobileFilter,
        setMobileFilter,
        clearInputs,
        setClearInputs,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
