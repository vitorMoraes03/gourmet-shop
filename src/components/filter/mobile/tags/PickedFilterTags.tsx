/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { FilterProps } from '../../filterList';
import TagSelected from './tagSelected';
import { handleUncheckFilter } from '@/utils/filter/handleUncheck';
import { ItemInterface } from '../../filterItem';
import { FiltersInterface } from '@/utils/useQuery';
import getAllOptions from '@/utils/filter/getAllOptions';
import getAllFilters from '@/utils/filter/getAllFilters';

function PickedFilterTags({
  content,
}: {
  content: FilterProps;
}) {
  const { filters, setFilters } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<
    ItemInterface[]
  >([]);

  useEffect(() => {
    const currentItems: ItemInterface[] = [];
    getAllOptions(content).forEach((element) => {
      if (getAllFilters(filters).includes(element.value)) {
        currentItems.push(element);
      }
    });
    setCurrentItems(currentItems);
  }, [filters]);

  function handleUncheck(item: ItemInterface) {
    let currentCategory = '';

    Object.entries(filters).forEach(([key, value]) => {
      if (value.includes(item.value)) {
        currentCategory = key.split('.')[0];
      }
    });

    setFilters((prevFilters: FiltersInterface) => {
      return handleUncheckFilter(
        currentCategory,
        item.value,
        prevFilters
      );
    });
  }

  return (
    <div
      className={`flex flex-col gap-1 ${
        Object.keys(filters).length === 0 ? '' : 'mt-2'
      }`}
    >
      {currentItems.map((item, index) => (
        <TagSelected
          item={item}
          index={index}
          applyFilter={() => handleUncheck(item)}
          key={`${item}-${index}`}
        />
      ))}
    </div>
  );
}

export default PickedFilterTags;
