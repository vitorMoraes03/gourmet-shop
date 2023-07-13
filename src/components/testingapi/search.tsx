import { MongoClient } from 'mongodb';

export async function requestTest() {
  "use server"
  console.log('estou rodando sua piranha');

    const MONGODB_URI = process.env.MONGODB_URI as string;
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const contactCollection = db.collection('products');
    const products = await contactCollection
      .find({
        'country.pt': 'Itália',
        'category.pt': 'Vinho',
      })
      .toArray();
    client.close();

    return products;
}
