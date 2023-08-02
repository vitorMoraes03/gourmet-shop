/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { SelectorProps } from '..';
import { translateSortToString } from '@/utils/translateSort/sortToString';
import TagWrapper from './tagWrapper';
import { ItemInterface } from '../../filterItem';

function PickedSortTags({
  content,
}: {
  content: SelectorProps;
}) {
  const { sortOptions } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<
    ItemInterface[]
  >([]);

  useEffect(() => {
    const translated = translateSortToString(sortOptions);
    content.options.forEach((element) => {
      if (element.value === translated) {
        setCurrentItems([element]);
      }
    });
  }, [sortOptions]);

  return (
    <>
      {currentItems.map((item, index) => (
        <TagWrapper
          item={item}
          index={index}
          key={`${item}-${index}`}
        />
      ))}
    </>
  );
}

export default PickedSortTags;
