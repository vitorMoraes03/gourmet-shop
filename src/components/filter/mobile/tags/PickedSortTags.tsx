/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { SelectorProps } from '..';
import { translateSortToString } from '@/utils/translateSort/sortToString';

function PickedSortTags({
  content,
}: {
  content: SelectorProps;
}) {
  const { sortOptions } = useContext(FilterContext);
  const [currentItems, setCurrentItems] =
    useState<string>('');

  useEffect(() => {
    const translated = translateSortToString(sortOptions);
    content.options.forEach((element) => {
      if (element.value === translated) {
        setCurrentItems(element.label);
      }
    });
  }, [sortOptions]);

  return <div>{currentItems}</div>;
}

export default PickedSortTags;
