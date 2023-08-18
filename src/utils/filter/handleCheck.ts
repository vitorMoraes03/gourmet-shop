import { ItemInterface } from '@/components/filter/filterItem';
import { FiltersInterface } from '../query/useQuery';
import { getObjValuesByCategory } from './getObjValues';

export function handleCheckFilter(
  category: string,
  itemValue: string,
  previousFilters: FiltersInterface
) {
  const updatedValues = [
    ...getObjValuesByCategory(category, previousFilters),
    itemValue,
  ];

  const updatedFilters = {
    ...previousFilters,
    [category + '.en']: updatedValues,
  };

  return updatedFilters;
}
