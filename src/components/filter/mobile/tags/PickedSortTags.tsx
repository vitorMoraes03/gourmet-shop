/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { SelectorProps } from '..';
import { translateSortToString } from '@/utils/translateSort/sortToString';
import TagSelected from './tagSelected';
import { ItemInterface } from '../../filterItem';

function PickedSortTags({
  content,
}: {
  content: SelectorProps;
}) {
  const { sortOptions, setSortOptions } =
    useContext(FilterContext);
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

  function handleCloseSort() {
    setSortOptions({});
    setCurrentItems([]);
  }

  return (
    <div
      className={`flex flex-col gap-1 ${
        Object.keys(sortOptions).length === 0 ? '' : 'mt-2'
      }`}
    >
      {currentItems.map((item, index) => (
        <TagSelected
          item={item}
          index={index}
          key={`${item}-${index}`}
          applyFilter={() => handleCloseSort()}
        />
      ))}
    </div>
  );
}

export default PickedSortTags;
