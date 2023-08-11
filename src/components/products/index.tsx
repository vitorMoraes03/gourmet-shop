/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ProductsProps } from '../../../messages/useContent';
import DesktopSelector from '../filter/desktopSort';
import FilterList from '../filter/filterList';
import ListProducts from './listProducts';
import MobileSelector from '../filter/mobile';
import Title from './title';
import useScreenSmallerThen from '@/utils/useScreenSize';
import { useEffect, useContext, useState } from 'react';
import { FilterContext } from '@/contexts/filter';
import {
  ProductsContext,
  ProductsProvider,
} from '@/contexts/products';
import {
  FiltersInterface,
  QueryResult,
} from '@/utils/query/useQuery';
import FilterSelectors from '../filter';

export interface ProductInterface
  extends ProductInterfaceNoID {
  id?: string;
  _id?: string;
}

export interface ProductInterfaceNoID {
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
  tags: {
    firstTag: {
      label: {
        pt: string;
        en: string;
      };
      content: {
        pt: string[];
        en: string[];
      };
    };
    secondTag: {
      label: {
        pt: string;
        en: string;
      };
      content: {
        pt: string;
        en: string;
      };
    };
    thirdTag: {
      label: {
        pt: string;
        en: string;
      };
      content: {
        pt: string;
        en: string;
      };
    };
  };
  fakeNumbers: {
    review: number;
    stock: number;
  };
  vegan: boolean;
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
  const {
    filters,
    sortOptions,
    mobileFilter,
    setMobileFilter,
  } = useContext(FilterContext);
  const { currentProducts, setCurrentProducts } =
    useContext(ProductsContext);

  const fetchData = async () => {
    const promise = queryFunction(filters, sortOptions);
    // console.log('filters', filters);
    const { products }: QueryResult = await promise;
    if (products === null) return;
    setCurrentProducts(products);
  };

  const applyFillter = () => {
    fetchData();
  };

  useEffect(() => {
    if (mobileFilter) return;
    fetchData();
  }, [filters, sortOptions]);

  useEffect(() => {
    setCurrentProducts(JSON.parse(data));
    isScreenSmallerThen
      ? setMobileFilter(true)
      : setMobileFilter(false);
  }, []);

  return (
    <section className="header-spacing default-x-padding px-4">
      <div className="py-8">
        <Title
          title={content.title}
          subtitle={content.subtitle}
        />
        <FilterSelectors
          content={content}
          isScreenSmall={isScreenSmallerThen}
          applyFillter={applyFillter}
        />
        <div className="mt-2 sm:mt-4 sm:flex">
          {!isScreenSmallerThen && (
            <FilterList content={content.filters} />
          )}
          <ListProducts fetchedContent={currentProducts} />
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
