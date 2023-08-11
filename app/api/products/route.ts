import {
  ProductInterface,
  ProductInterfaceNoID,
} from '@/components/products';
import { MongoClient } from 'mongodb';
import { NextRequest } from 'next/server';

// Route for 'creating products' purpose

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function POST(req: NextRequest) {
  const data: ProductInterfaceNoID[] = await req.json();
  // const data: ProductInterface = await req.json();
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const contactCollection = db.collection('products');
  await contactCollection.insertMany(data);
  // await contactCollection.insertOne(data);
  client.close();

  return new Response(
    JSON.stringify({ message: 'Post Route Working!' }),
    { status: 201 }
  );
}
