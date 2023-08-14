'use client';

import React from 'react';
import { useState } from 'react';
import { ProductInterface } from '@/components/products';

export const ProductsContext = React.createContext({
  currentProducts: [] as ProductInterface[],
  setCurrentProducts: (_: ProductInterface[]) => {},
});

export function ProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentProducts, setCurrentProducts] = useState<
    ProductInterface[]
  >([]);

  return (
    <ProductsContext.Provider
      value={{
        currentProducts,
        setCurrentProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
