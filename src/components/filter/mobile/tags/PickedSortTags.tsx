/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { SelectorProps } from '..';

function PickedSortTags({
  content,
}: {
  content: SelectorProps;
}) {
  const { sortOptions } = useContext(FilterContext);
  const [currentItems, setCurrentItems] =
    useState<string>('');

  function translateSortOptions(obj: {
    [key: string]: number;
  }) {
    const { price, rating, _id } = obj;
    if (price === -1) {
      return 'highestPrice';
    }
    if (price === 1) {
      return 'lowestPrice';
    }
    if (rating === -1) {
      return 'bestSeller';
    }
    if (_id === -1) {
      return 'recommended';
    }
    return '';
  }

  useEffect(() => {
    const translated = translateSortOptions(sortOptions);
    content.options.forEach((element) => {
      if (element.value === translated) {
        setCurrentItems(element.label);
      }
    });
  }, [sortOptions]);

  return <div>{currentItems}</div>;
}

export default PickedSortTags;
