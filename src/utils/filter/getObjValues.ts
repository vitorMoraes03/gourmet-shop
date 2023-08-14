import { FiltersInterface } from '../query/useQuery';

export function getObjValuesByCategory(
  category: string,
  previousFilters: FiltersInterface
): string[] {
  if (Array.isArray(previousFilters[category + '.en'])) {
    return previousFilters[category + '.en'] as string[];
  }
  return [];
}
