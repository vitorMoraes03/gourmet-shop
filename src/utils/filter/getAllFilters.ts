import { FiltersInterface } from '../query/useQuery';

function getAllFilters(filters: FiltersInterface) {
  const allFilters: string[] = [];
  Object.entries(filters).forEach(([_, value]) => {
    allFilters.push(...value);
  });
  return allFilters;
}

export default getAllFilters;
