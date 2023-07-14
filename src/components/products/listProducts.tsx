import Card from './card';
import { ProductInterface } from '@/utils/useFetchedData';

function ListProducts({
  fetchedContent,
}: {
  fetchedContent: string;
}) {
  const contentParsed: ProductInterface[] =
    JSON.parse(fetchedContent);

  return (
    <div className="w-full py-2 sm:ml-auto sm:w-3/4">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 sm:gap-4">
        {contentParsed.map((product, index) => (
          <li key={`${product.productName}-${index}`}>
            <Card content={product} idWhere={'listProducts'} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;