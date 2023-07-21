/* eslint-disable react-hooks/exhaustive-deps */
import { FilterContext } from '@/contexts/filter';
import { useContext, useEffect, useState } from 'react';
import { FilterProps } from '../filter';

function FilterContainer({
  content,
}: {
  content: FilterProps;
}) {
  const { filters } = useContext(FilterContext);
  const [currentItems, setCurrentItems] = useState<any>([]);
  const options = content.category.options;

  useEffect(() => {
    console.log('filters', Object.values(filters));
    const [ filtersDestructured ] = Object.values(filters);
    options.forEach((element) => {
      if (filtersDestructured?.includes(element.value)) {
        console.log('aqui');
        setCurrentItems([...currentItems, element.label]);
      }
    });
  }, [filters]);

  useEffect(() => {
    console.log('currentItems', currentItems);
  }, [currentItems]);

  // esse é o caminho para renderizar o role
  // agora vamos checar tb o que esta no filter
  return <div>{currentItems}</div>;
}

export default FilterContainer;
