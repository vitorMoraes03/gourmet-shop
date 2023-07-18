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
import { ProductInterface } from '@/utils/useFirstFetch';
import {
  FiltersInterface,
  QueryResult,
} from '@/utils/useQuery';

function ProductsPage({
  content,
  data,
  queryFunction,
}: {
  content: ProductsProps;
  data: string;
  queryFunction: (
    filters: FiltersInterface
  ) => Promise<QueryResult>;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({
    width: 640,
  });
  const { filters } = useContext(FilterContext);
  const [currentProducts, setCurrentProducts] = useState<
    ProductInterface[]
  >([]);

  useEffect(() => {
    if (
      Object.values(filters).every(
        (value) => value.length === 0
      )
    ) {
      setCurrentProducts(JSON.parse(data));
      return;
    }

    const fetchData = async () => {
      const promise = queryFunction(filters);
      const { products }: QueryResult = await promise;
      if (products === null) return;
      setCurrentProducts(products);
    };

    fetchData();
  }, [filters]);

  useEffect(() => {
    setCurrentProducts(JSON.parse(data));
  }, []);

  return (
    <section className="px-4 py-32 md:px-12 md:py-40">
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
