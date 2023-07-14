import { MongoClient, Filter } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

// parametros?

export interface FiltersInterface {
  [key: string]: any;
}

async function useQuery(filters: FiltersInterface) {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const contactCollection = db.collection('products');
  const products = await contactCollection
    .find(filters)
    .toArray();
  client.close();

  const productArray = products.map((product) => {
    const { _id, ...rest } = product;
    return { id: _id.toString(), ...rest };
  });

  return productArray;
}

export default useQuery;
