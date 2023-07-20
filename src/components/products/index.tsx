/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ProductsProps } from '../../../messages/useContent';
import DesktopSelector from '../filter/desktopSelector';
import Filter from '../filter/filter';
import ListProducts from './listProducts';
import MobileSelector from '../filter/mobileSelector';
import Title from './title';
import useScreenSmallerThen from '@/utils/useScreenSize';
import { useEffect, useContext, useState } from 'react';
import { FilterContext } from '@/contexts/filter';
import {
  FiltersInterface,
  QueryResult,
} from '@/utils/useQuery';

export interface ProductInterface {
  id?: string;
  _id?: string;
  productName: {
    pt: string;
    en: string;
  };
  price: number;
  rating: number;
  country: {
    pt: string;
    en: string;
  };
  category: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: {
    url: string;
    alt: {
      pt: string;
      en: string;
    };
    width: number;
    height: number;
  };
}

function ProductsPage({
  content,
  data,
  queryFunction,
}: {
  content: ProductsProps;
  data: string;
  queryFunction: (
    filters: FiltersInterface,
    sortOptions: {}
  ) => Promise<QueryResult>;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({
    width: 640,
  });
  const { filters, sortOptions, mobileFilter } =
    useContext(FilterContext);
  const [currentProducts, setCurrentProducts] = useState<
    ProductInterface[]
  >([]);

  // poderiamos no contexto de filter adicionar algo true/false para verificar se
  // modal esta aberto ou nao
  // se for false segue esse comportamento já estabelecido
  // se for true, precisa estar off para acontecer
  // logo btn troca isso
  // trocar true e false?

  useEffect(() => {
    if (mobileFilter) return;

    const fetchData = async () => {
      const promise = queryFunction(filters, sortOptions);
      const { products }: QueryResult = await promise;
      if (products === null) return;
      setCurrentProducts(products);
    };

    fetchData();
  }, [filters, sortOptions]);

  useEffect(() => {
    setCurrentProducts(JSON.parse(data));
  }, []);

  return (
    <section className="px-4 py-32 sm:px-10 md:py-40 xl:px-16">
      <Title
        title={content.title}
        subtitle={content.subtitle}
      />
      {isScreenSmallerThen ? (
        <MobileSelector
          content={content.selector}
          filterContent={content.filters}
        />
      ) : (
        <DesktopSelector content={content.selector} />
      )}
      <div className="mt-2 sm:mt-4 sm:flex">
        {!isScreenSmallerThen && (
          <Filter content={content.filters} />
        )}
        <ListProducts fetchedContent={currentProducts} />
      </div>
    </section>
  );
}

export default ProductsPage;
