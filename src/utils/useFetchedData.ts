import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

async function useFetchedData() {
  return await fetcherAll();
}

async function fetcherAll(): Promise<ProductInterface[]> {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const products = await db
    .collection('products')
    .find()
    .toArray();
  client.close();

  const productArray = products.map((product) => ({
    productName: {
      pt: product.productName.pt,
      en: product.productName.en,
    },
    price: product.price,
    rating: product.rating,
    country: {
      pt: product.country.pt,
      en: product.country.en,
    },
    category: {
      pt: product.category.pt,
      en: product.category.en,
    },
    description: {
      pt: product.description.pt,
      en: product.description.en,
    },
    image: {
      url: product.image.url,
      alt: {
        pt: product.image.alt.pt,
        en: product.image.alt.en,
      },
      width: product.image.width,
      height: product.image.height,
    },
  }));

  console.log('productArray', productArray);

  return productArray;
}

export interface ProductInterface {
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
