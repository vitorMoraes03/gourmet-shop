import { ItemInterface } from '@/components/filter/filterItem';
import { FiltersInterface } from '../query/useQuery';
import { getObjValuesByCategory } from './getObjValues';

export function handleUncheckFilter(
  category: string,
  itemValue: string,
  previousFilters: FiltersInterface
): FiltersInterface {
  const values = getObjValuesByCategory(
    category,
    previousFilters
  );
  const categoryKeyAcess = category + '.en';

  const valuesAfterUncheck = values.filter(
    (value: string) => value !== itemValue
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
