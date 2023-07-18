import Card from './card';
import { ProductInterface } from '@/utils/useFirstFetch';

function ListProducts({
  fetchedContent,
}: {
  fetchedContent: ProductInterface[] | null | void;
}) {
  return (
    <div className="w-full py-2 sm:ml-auto sm:w-3/4">
      <ul className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
        {fetchedContent?.map((product, index) => (
          <li key={`${product.productName}-${index}`}>
            <Card
              content={product}
              idWhere={'listProducts'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
