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
import { ProductInterface } from '@/utils/useFetchedData';
import { FiltersInterface } from '@/utils/useQuery';

function ProductsPage({
  content,
  data,
  queryFunction,
}: {
  content: ProductsProps;
  data: string;
  queryFunction: (
    filters: FiltersInterface[]
  ) => Promise<ProductInterface[] | null>;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({
    width: 640,
  });
  const { filters, setFilters } = useContext(FilterContext);
  const [currentProducts, setCurrentProducts] = useState<
    ProductInterface[] | null
  >([]);

  useEffect(() => {
    console.log('filters', filters);
    const fetchData = async () => {
      const promise = queryFunction(filters);
      const resolve: ProductInterface[] | null = await promise;
      setCurrentProducts(resolve);
      console.log('resolve', resolve);
    };
    fetchData();
  }, [filters]);

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
        <ListProducts fetchedContent={data} />
      </div>
    </section>
  );
}

export default ProductsPage;
