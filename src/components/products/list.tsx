import Card from './card';

interface ListProps {
  products: {
    src: string;
    width: string;
    height: string;
    alt: string;
    title: string;
    subtitle: string;
    price: string;
    stars: string;
    bestSeller: string;
  }[];
}

function List({ contentForTest }: { contentForTest: any }) {
  return (
    <div className='border w-full sm:w-2/3 py-2'>
      <ul>
        <Card content={contentForTest[0]} />
      </ul>
    </div>
  );
}

export default List;
