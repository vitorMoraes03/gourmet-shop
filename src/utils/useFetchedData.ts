import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

async function useFetchedData() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const products = await db
    .collection('products')
    .find()
    .toArray();
  client.close();

  const productArray = products.map((product) => {
    const { _id, ...rest } = product;
    return { id: _id.toString(), ...rest };
  });

  return productArray;
}

export interface ProductInterface {
  id: string;
  productName: {
    pt: string;
    en: string;
  };
  price: number;
  rating: number;
  country: {
    pt: string;
    en: string;
  };
  category: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: {
    url: string;
    alt: {
      pt: string;
      en: string;
    };
    width: number;
    height: number;
  };
}

export default useFetchedData;
