import {
  FiltersInterface,
  QueryObjInterface,
} from '../useQuery';

export function createQueryObjWithIn(
  filters: FiltersInterface,
  queryObj: QueryObjInterface
) {
  for (const [key, value] of Object.entries(filters)) {
    if (!Array.isArray(value)) continue;
    if (value.length === 0) continue;
    queryObj[key as keyof QueryObjInterface] = {
      $in: value,
    };
  }
}
