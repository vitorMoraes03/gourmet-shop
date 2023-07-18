import { MongoClient, Filter } from 'mongodb';
import { ProductInterface } from './useFirstFetch';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: any;
}

export interface QueryResult {
  map(arg0: (product: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  length: number;
  products: ProductInterface[] | null;
}

async function useQuery(
  filters: FiltersInterface
): Promise<QueryResult> {
  'use server';

  try {
    const propertiesValues = Object.values(filters);
    if (
      propertiesValues.every((value) => value.length === 0)
    )
      return { products: null };

    const queryObj: {
      [key in keyof FiltersInterface]: {
        $in: FiltersInterface[key];
      };
    } = {};

    for (const [key, value] of Object.entries(filters)) {
      if (value.length === 0) continue;
      queryObj[key as keyof FiltersInterface] = {
        $in: value,
      };
    }

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const products = await db
      .collection('products')
      .find(queryObj)
      .toArray();
    client.close();

    const productArray = products.map((product) => {
      const { _id, ...rest } = product;
      return { id: _id.toString(), ...rest } as ProductInterface;
    });

    return { products: productArray };
  } catch (error) {
    console.log('error useQuery', error);
    return { products: null };
  }
}

// export function productIdConversion(product: any) {
//   const { _id, ...rest } = product;
//   console.log('_id', _id);
//   return {
//     id: _id.toString(),
//     ...rest,
//   } as ProductInterface[];
// }

export default useQuery;
