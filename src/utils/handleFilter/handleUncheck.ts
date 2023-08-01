import { ItemInterface } from '@/components/filter/filterItem';
import { FiltersInterface } from '../useQuery';
import { getObjValuesByCategory } from './getObjValues';

export function handleUncheckFilter(
  category: string,
  item: ItemInterface,
  previousFilters: FiltersInterface
) {
  const values = getObjValuesByCategory(
    category,
    previousFilters
  );
  const categoryKeyAcess = category + '.en';

  const valuesAfterUncheck = values.filter(
    (value: string) => value !== item.value
  );

  if (valuesAfterUncheck.length === 0) {
    const { [categoryKeyAcess]: _, ...otherCategories } =
      previousFilters;
    return otherCategories;
  }

  const updatedFilters = {
    ...previousFilters,
    [categoryKeyAcess]: valuesAfterUncheck,
  };

  return updatedFilters;
}
