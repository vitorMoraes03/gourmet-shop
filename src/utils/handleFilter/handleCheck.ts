import { ItemInterface } from '@/components/filter/filterItem';
import { FiltersInterface } from '../useQuery';
import { getObjValuesByCategory } from './getObjValues';

export function handleCheckFilter(
  category: string,
  item: ItemInterface,
  previousFilters: FiltersInterface
) {

  const updatedValues = [
    ...getObjValuesByCategory(category, previousFilters),
    item.value,
  ];

  const updatedFilters = {
    ...previousFilters,
    [category + '.en']: updatedValues,
  }

  return updatedFilters;
}
