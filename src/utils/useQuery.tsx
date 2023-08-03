import { MongoClient, Filter } from 'mongodb';
import { ProductInterface } from '@/components/products';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: string[];
}

export interface QueryResult {
  products: ProductInterface[] | null;
}

export interface QueryObjInterface {
  [key: string]: {
    $in?: string[];
    $regex?: string;
    $options?: string;
  };
}

async function useQuery(
  filters: FiltersInterface,
  sortOptions: {}
): Promise<QueryResult> {
  'use server';

  try {
    let queryObj: QueryObjInterface = {};
    console.log('filters', filters);

    if (checkIfCategoryOrCountry(filters)) {
      createQueryObjWithIn(filters, queryObj);
    }

    // agora preciso criar uma checagem para titulo e categoria, com outro comportamento
    // mas antes preciso inserir esse tipo de dado no filter

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

function createQueryObjWithIn(
  filters: FiltersInterface,
  queryObj: QueryObjInterface
) {
  for (const [key, value] of Object.entries(filters)) {
    if (value.length === 0) continue;
    queryObj[key as keyof FiltersInterface] = {
      $in: value,
    };
  }
}

function defaultSortOptions(sortOptions: {}) {
  if (Object.keys(sortOptions).length === 0)
    return { rating: -1 };
  return sortOptions;
}

function checkIfCategoryOrCountry(
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

export default useQuery;
