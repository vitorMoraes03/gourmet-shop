import { MongoClient } from 'mongodb';
import { ProductInterface } from '@/components/products';
import checkEmpty from '../checkObjEmpty';
import { checkIfCategoryOrCountry } from './checkCondition/categoryOrCountry';
import { checkIfIsSearch } from './checkCondition/isSearch';
import { createQueryObjWithIn } from './createQuery/withIn';
import { createQueryObjWithRegex } from './createQuery/withRegex';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: string[];
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

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const products = await db
      .collection('products')
      .find(queryObj)
      .sort(defaultSortOptions(sortOptions))
      .toArray();
    client.close();

    const productArray = products.map((product) => {
      const { _id, ...rest } = product;
      return {
        id: _id.toString(),
        ...rest,
      } as ProductInterface;
    });

    return { products: productArray };
  } catch (error) {
    return { products: null };
  }
}

function defaultSortOptions(sortOptions: {}) {
  if (Object.keys(sortOptions).length === 0)
    return { rating: -1 };
  return sortOptions;
}

export default useQuery;
