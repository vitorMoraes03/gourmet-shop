/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { FilterProps } from '../../filterList';

function PickedFilterTags({
  content,
}: {
  content: FilterProps;
}) {
  const { filters } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<any>([]);
  const options = content.category.options;

  useEffect(() => {
    const [filtersDestructured] = Object.values(filters);
    options.forEach((element) => {
      if (filtersDestructured?.includes(element.value)) {
        setCurrentItems([...currentItems, element.label]);
      }
    });
  }, [filters]);

  return <div>{currentItems}</div>;
}

export default PickedFilterTags;
