import { FiltersInterface } from '../query/useQuery';

export function getObjValuesByCategory(
  category: string,
  previousFilters: FiltersInterface
): string[] {
  return previousFilters[category + '.en'] || [];
}
