import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFirstFetch, {
  ProductInterface,
} from '@/utils/useFirstFetch';
import useQuery, {
  FiltersInterface,
} from '@/utils/useQuery';

function ProductPageWithContent({
  data,
  queryFunction,
}: {
  data: string;
  queryFunction: (
    filters: FiltersInterface
  ) => Promise<ProductInterface[] | null | void>;
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
  const data = await useFirstFetch();

  return (
    <ProductPageWithContent
      data={JSON.stringify(data)}
      queryFunction={useQuery}
    />
  );
}

export default Product;
