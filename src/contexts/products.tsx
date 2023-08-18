'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { ProductInterface } from '@/components/products';

export const ProductsContext = React.createContext({
  currentProducts: [] as ProductInterface[],
  setCurrentProducts: (_: ProductInterface[]) => {},
  cart: [] as ProductInterface[],
  setCart: (_: ProductInterface[]) => {},
});

export function ProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentProducts, setCurrentProducts] = useState<
    ProductInterface[]
  >([]);
  const [cart, setCart] = useState<ProductInterface[]>([]);

  return (
    <ProductsContext.Provider
      value={{
        currentProducts,
        setCurrentProducts,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
