import { FiltersInterface, QueryObjInterface } from "../useQuery";

export function createQueryObjWithRegex(
    filters: FiltersInterface,
    queryObj: QueryObjInterface
  ) {
    for (const [key, value] of Object.entries(filters)) {
      if (value.length === 0) continue;
      queryObj['$or'] = [];
      const keyLang = key.split('.')[1];
      console.log('value[0]', value[0]);
      queryObj['$or'].push(
        {
          ['description.' + keyLang]: {
            $regex: value[0],
            $options: 'i',
          },
        },
        {
          ['productName.' + keyLang]: {
            $regex: value[0],
            $options: 'i',
          },
        }
      );
    }
  }