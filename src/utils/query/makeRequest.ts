import { ProductInterface } from '@/components/products';
import { QueryObjInterface } from './useQuery';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface ReqFunctionInterface {
  (queryObj: QueryObjInterface, sortOptions: {}): Promise<{
    products: ProductInterface[];
  }>;
}

export async function makeRequest(
  queryObj: QueryObjInterface,
  sortOptions: {}
) {
  'use server';

  // const objHardCoded = {
  //   'category.en': ['Wine'],
  //   'country.en': { $in: ['Italy', 'France'] },
  // };

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const products = await db
    .collection('products')
    .find(queryObj)
    .sort(defaultSortOptions(sortOptions))
    .toArray();
  client.close();

  console.log('products', products);

  const productArray = products.map((product) => {
    const { _id, ...rest } = product;
    return {
      id: _id.toString(),
      ...rest,
    } as ProductInterface;
  });

  return { products: productArray };
}

function defaultSortOptions(sortOptions: {}) {
  if (Object.keys(sortOptions).length === 0)
    return { rating: -1 };
  return sortOptions;
}
