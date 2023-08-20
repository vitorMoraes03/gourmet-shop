import ProductsPage, { ProductInterface } from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useQuery, {
  FiltersInterface,
  QueryResult,
} from '@/utils/query/useQuery';

function ProductPageWithContent({
  data,
  queryFunction,
}: {
  data: ProductInterface[] | null;
  queryFunction: (
    filters: FiltersInterface,
    sortOptions: {}
  ) => Promise<QueryResult>;
}) {
  const { productsPage } = useContent();
  return (
    <ProductsPage
      content={productsPage}
      data={data}
      queryFunction={queryFunction}
    />
  );
}

async function Product() {
  const { products } = await useQuery({}, {});

  return (
    <ProductPageWithContent
      data={products}
      queryFunction={useQuery}
    />
  );
}

export default Product;
