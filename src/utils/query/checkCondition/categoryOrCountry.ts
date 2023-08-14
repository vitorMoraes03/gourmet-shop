import { FiltersInterface } from '../useQuery';

export function checkIfCategoryOrCountry(
  filters: FiltersInterface
): FiltersInterface {
  let objFilter: FiltersInterface = {};
  Object.keys(filters).forEach((key) => {
    const keySplit = key.split('.')[0];
    if (keySplit === 'category' || keySplit === 'country') {
      objFilter[key] = filters[key];
    }
  });
  return objFilter;
}
