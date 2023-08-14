/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, useContext } from 'react';
import { HeaderProps } from '../../../messages/useContent';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';
import useScreenSmallerThen from '@/utils/useScreenSize';
import { ProductsContext } from '@/contexts/products';
import { selectProducts } from '@/utils/selectProducts';
import { ReqFunctionInterface } from '@/utils/query/makeRequest';

function HeaderScreenSelector({
  headerContent,
  reqFunction,
}: {
  headerContent: HeaderProps;
  reqFunction: ReqFunctionInterface;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({
    width: 850,
  });
  const [linkSelected, setLinkSelected] = useState('');
  const { setCurrentProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    // console.log('linkSelected', linkSelected);
    if (!linkSelected) return;
    const filterObj = selectProducts(linkSelected);
    // console.log('filterObj', filterObj);
    fetchProducts(filterObj);
  }, [linkSelected]);

  const fetchProducts = async (filters: any) => {
    const { products } = await reqFunction(filters, {});
    // console.log('products', products);
    setCurrentProducts(products);
  };

  return (
    <>
      {isScreenSmallerThen ? (
        <HeaderMobile header={headerContent} />
      ) : (
        <HeaderDesktop
          header={headerContent}
          setLink={setLinkSelected}
        />
      )}
    </>
  );
}

export default HeaderScreenSelector;
