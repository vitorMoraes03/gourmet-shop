import { MongoClient, Filter } from 'mongodb';
import { ProductInterface } from './useFirstFetch';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: any;
}

export interface QueryResult {
  products: ProductInterface[] | null;
}

async function useQuery(
  filters: FiltersInterface,
  sortOptions: {}
): Promise<QueryResult> {
  'use server';

  function defaultSortOptions(sortOptions: {}) {
    if (Object.keys(sortOptions).length === 0)
      return { rating: -1 };
    return sortOptions;
  }

  try {
    let queryObj: {
      [key in keyof FiltersInterface]: {
        $in: FiltersInterface[key];
      };
    } = {};

    if (Object.keys(filters).length === 0) {
      queryObj = {};
    } else {
      for (const [key, value] of Object.entries(filters)) {
        if (value.length === 0) continue;
        queryObj[key as keyof FiltersInterface] = {
          $in: value,
        };
      }
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
    console.log('error useQuery', error);
    return { products: null };
  }
}

export default useQuery;
