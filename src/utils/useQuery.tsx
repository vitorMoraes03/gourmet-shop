import { MongoClient, Filter } from 'mongodb';
import { ProductInterface } from '@/components/products';
import checkEmpty from './checkObjEmpty';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: string[];
}

export interface QueryResult {
  products: ProductInterface[] | null;
}

// const queryObj = {
//   $or: [
//     { 'description.pt': { $regex: 'gorgonzola', $options: 'i' } },
//     { 'title.pt': { $regex: 'gorgonzola', $options: 'i' } }
//   ]
// };

// interface QueryObject {
//   [key: string]:
//     | string
//     | { $regex: string; $options: string }
//     | { $in: string[] };
// }

export interface QueryObjInterface {
  [key: string]:
    | string
    | { $regex: string; $options: string }
    | { $in: string[] };
  // [key: string]:
  //   | string[]
  //   | { $regex: string; $options: string }[]
  //   | { $in: string[] };
}

export interface BiggerQueryObjInterface {
  [key: string]: QueryObjInterface;
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
    console.log('filters', filters);

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

// 'description.pt': { $regex: 'acabate', $options: 'i' }

function createQueryObjWithRegex(
  filters: FiltersInterface,
  queryObj: any
) {
  console.log('filters', filters);
  for (const [key, value] of Object.entries(filters)) {
    if (value.length === 0) continue;
    queryObj['$or'] = [];
    const keyLang = key.split('.')[1];
    queryObj['$or'].push({
      ['description.' + keyLang]: {
        $regex: value[0],
        $options: 'i',
      },
      ['productName.' + keyLang]: {
        $regex: value[0],
        $options: 'i',
      },
    });
    // queryObj[key as keyof FiltersInterface] = {
    //   $regex: value[0],
    //   $options: 'i',
    // };
  }
  console.log('queryObj', queryObj);
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

function checkIfIsSearch(
  filters: FiltersInterface
): FiltersInterface {
  let objFilter: FiltersInterface = {};
  Object.keys(filters).forEach((key) => {
    console.log('key', key);
    const keySplit = key.split('.')[0];
    const keyLang = key.split('.')[1];
    console.log('keySplit', keySplit);
    console.log('keylang', keyLang);
    if (keySplit === 'search') {
      objFilter['description.' + keyLang] = filters[key];
      // objFilter['title.' + keyLang] = filters[key];
      console.log('objFilter', objFilter);
    }
  });
  return objFilter;
}

export default useQuery;
