import CloseIcon from '@/components/icons/close';
import { FilterContext } from '@/contexts/filter';
import { handleUncheckFilter } from '@/utils/handleFilter/handleUncheck';
import { FiltersInterface } from '@/utils/useQuery';
import { useContext, useState } from 'react';
import { ItemInterface } from '../../filterItem';

function TagWrapper({
  item,
  index,
}: {
  item: ItemInterface;
  index: number;
}) {
  const { setFilters, filters } = useContext(FilterContext);

  function handleUncheck() {
    console.log('handleUncheck called');
    let currentCategory = '';

    Object.entries(filters).forEach(([key, value]) => {
      console.log(item);
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
      key={`${item}-${index}`}
      className="flex w-full items-center justify-between 
  border border-gray p-1"
    >
      <p className="font-normal">{item.label}</p>
      <button onClick={() => handleUncheck()}>
        <CloseIcon styles="w-3" />
      </button>
    </div>
  );
}

export default TagWrapper;
