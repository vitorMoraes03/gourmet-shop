import { ProductInterface } from '@/components/products';
import checkEmpty from '../checkObjEmpty';
import { checkIfCategoryOrCountry } from './checkCondition/categoryOrCountry';
import { checkIfIsSearch } from './checkCondition/isSearch';
import { createQueryObjWithIn } from './createQuery/withIn';
import { createQueryObjWithRegex } from './createQuery/withRegex';
import { makeRequest } from './makeRequest';

export interface FiltersInterface {
  [key: string]:
    | string[]
    | boolean
    | { $regex: string; $options: string }
    | { $ne: string }
    | { $in: string[] };
}

export interface QueryResult {
  products: ProductInterface[] | null;
}

export type QueryObjInterface =
  | QueryInCondition
  | QueryOrCondition;

export interface QueryInCondition {
  [key: string]: { $in: string[] };
}

export interface QueryOrCondition {
  $or: {
    [key: string]: { $regex: string; $options: string };
  }[];
}

async function useQuery(
  filters: FiltersInterface,
  sortOptions: {}
): Promise<QueryResult> {
  'use server';

  try {
    let queryObj: QueryObjInterface = {};
    const categoryOrCountry =
      checkIfCategoryOrCountry(filters);
    const search = checkIfIsSearch(filters);

    if (!checkEmpty(categoryOrCountry)) {
      createQueryObjWithIn(categoryOrCountry, queryObj);
    }

    if (!checkEmpty(search)) {
      createQueryObjWithRegex(search, queryObj);
    }

    console.log('queryObj', queryObj);

    return await makeRequest(queryObj, sortOptions);
  } catch (error) {
    return { products: null };
  }
}

export default useQuery;
