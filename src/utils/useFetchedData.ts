import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

function useFetchedData() {
  return fetcherAll();
}

async function fetcherAll() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const contactCollection = db.collection('products');
  const products = await contactCollection.find().toArray();
  client.close();

  return new Response(JSON.stringify(products), {
    status: 200,
  });
}

export default useFetchedData;