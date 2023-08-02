/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { FilterProps } from '../../filterList';
import TagWrapper from './tagWrapper';

function PickedFilterTags({
  content,
}: {
  content: FilterProps;
}) {
  const { filters } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<
    string[]
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
    const currentItems: string[] = [];
    allOptions.forEach((element) => {
      if (getAllFilters().includes(element.value)) {
        currentItems.push(element.label);
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
