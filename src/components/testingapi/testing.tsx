import { MongoClient } from 'mongodb';

// JUST FOR TEST PURPOSES //

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface Bananas {
  userName: string;
  nickname: string;
  id: string;
}

export default async function ButtonTest() {
  const dataForPOST = {
    userName: 'Giullinha',
    nickname: 'Giullinha do Vila Amélia',
  };

  const dataFetched = await getData();
  const bananasss = dataFetched.props.bananasss;

  async function makeRequest() {
    const response = await fetch('/api/testing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForPOST),
    });

    const responseData = await response.json();
    // console.log('Reponse no front:', responseData);
  }

  // if(!bananasss) return (<div>Carregando...</div>)

  return (
    <div>
      <button
        className="m-2 border border-darkerGray bg-red-500 p-2"
        // onClick={() => makeRequest()}
        // onClick só em client side...
      >
        Test
      </button>
      <div>
        {bananasss?.map((bananas: Bananas) => (
          <div key={bananas.id}>
            <p>{bananas.userName}</p>
            <p>{bananas.nickname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getData() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();
  const bananasss = await db
    .collection('bananasss')
    .find()
    .toArray();
  client.close();
  return {
    props: {
      bananasss: bananasss.map((bananas) => ({
        userName: bananas.userName,
        nickname: bananas.nickname,
        id: bananas._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
