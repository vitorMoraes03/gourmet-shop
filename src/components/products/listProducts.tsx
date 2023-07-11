import Card from './card';
import { ProductInterface } from '@/utils/useFetchedData';

async function ListProducts({
  fetchedContent,
}: {
  fetchedContent: ProductInterface[];
}) {
  return (
    <div className="w-full py-2 sm:ml-auto sm:w-3/4">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
        {fetchedContent.map((product, index) => (
          <li key={`${product.productName}-${index}`}>
            <Card content={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
