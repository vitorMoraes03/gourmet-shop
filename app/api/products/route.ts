import { MongoClient } from 'mongodb';
import { NextRequest } from 'next/server';

const MONGODB_URI = process.env.MONGODB_URI as string;

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
    url: string;
  }

export async function POST(req: NextRequest) {
  const data: ProductInterface = await req.json();
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const contactCollection = db.collection('products');
  await contactCollection.insertOne(data);
  client.close();

  return new Response(
    JSON.stringify({ message: 'Post Route Working!' }),
    { status: 201 }
  );
}
