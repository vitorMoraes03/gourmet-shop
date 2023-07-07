import { MongoClient } from 'mongodb';
import { NextApiResponse, NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function GET(req: NextApiRequest) {
  return new Response(
    JSON.stringify({ message: 'Get route working' }),
    { status: 201 }
  );
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
