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
    <div className="w-full border-2 py-2 sm:w-2/3">
      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4'>
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
        <Card content={contentForTest[0]} />
      </ul>
    </div>
  );
}

export default List;
