import { FiltersInterface } from '../useQuery';

export function checkIfIsSearch(
  filters: FiltersInterface
): FiltersInterface {
  let objFilter: FiltersInterface = {};
  Object.keys(filters).forEach((key) => {
    console.log('key', key);
    const keySplit = key.split('.')[0];
    const keyLang = key.split('.')[1];
    if (keySplit === 'search') {
      objFilter['description.' + keyLang] = filters[key];
      objFilter['title.' + keyLang] = filters[key];
    }
  });
  return objFilter;
}
