/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { FilterProps } from '../../filterList';
import TagWrapper from './tagWrapper';
import { handleUncheckFilter } from '@/utils/handleFilter/handleUncheck';
import { ItemInterface } from '../../filterItem';

function PickedFilterTags({
  content,
}: {
  content: FilterProps;
}) {
  const { filters } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<
    ItemInterface[]
  >([]);
  const allOptions = [
    ...content.category.options,
    ...content.country.options,
  ];

  function getAllFilters() {
    const filterCategory = filters['category.en'];
    const filterCountry = filters['country.en'];
    if (filterCategory && filterCountry) {
      return [...filterCategory, ...filterCountry];
    }
    if (filterCategory) {
      return filterCategory;
    }
    if (filterCountry) {
      return filterCountry;
    }
    return [];
  }

  useEffect(() => {
    const currentItems: ItemInterface[] = [];
    allOptions.forEach((element) => {
      if (getAllFilters().includes(element.value)) {
        currentItems.push(element);
      }
    });
    setCurrentItems(currentItems);
  }, [filters]);

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

export default PickedFilterTags;
