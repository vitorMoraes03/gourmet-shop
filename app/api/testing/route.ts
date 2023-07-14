import { MongoClient } from 'mongodb';
import { NextRequest } from 'next/server';

// testagem de rotas

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function GET(req: NextRequest) {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const bananasss = await db
    .collection('bananasss')
    .find()
    .toArray();
  client.close();
  return new Response(JSON.stringify(bananasss), {
    status: 201,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data) return;

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const contactCollection = db.collection('bananasss');
  await contactCollection.insertOne(data);

  client.close();

  return new Response(
    JSON.stringify({ message: 'Post Route Working!' }),
    { status: 201 }
  );
}
