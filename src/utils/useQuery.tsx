import { MongoClient, Filter } from 'mongodb';
import { ProductInterface } from './useFetchedData';

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface FiltersInterface {
  [key: string]: any;
}

async function useQuery(
  filters: FiltersInterface[]
): Promise<ProductInterface[] | null> {
  'use server';

  if (filters.length === 0) return null;

  // temos que implementar uma lógica que vai pegar valores com a mesma chave
  // e aplicar isso: 'country.pt': { $in: ['Itália', 'França']},
  // antes queremos um array de objetos na mesma.... mas com essa modificacao...

  // {'country.pt': 'Itália'}, {'country.pt': 'França'}
  // {'country.pt': ['Itália', 'França']}
  // 'country.pt': { $in: ['Itália', 'França']},

  // essa fn, transforma um array de objetos e um único objeto separado por virgulas
  // etapa final
  const uniqueFilters = filters.reduce((acc, obj) => {
    return { ...acc, ...obj };
  });

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const products = await db
    .collection('products')
    .find(uniqueFilters)
    .toArray();
  client.close();

  const productArray = products.map((product) => {
    const { _id, ...rest } = product;
    return { id: _id.toString(), ...rest };
  });

  return productArray as ProductInterface[];
}

export default useQuery;
