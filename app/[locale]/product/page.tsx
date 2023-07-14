import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFetchedData, {
  ProductInterface,
} from '@/utils/useFetchedData';
import useQuery, { FiltersInterface } from '@/utils/useQuery';

function ProductPageWithContent({
  data,
  queryFunction,
}: {
  data: string;
  queryFunction: (
    filters: FiltersInterface[]
  ) => Promise<ProductInterface[] | null>;
}) {
  const { productsPage } = useContent();
  return (
    <ProductsPage content={productsPage} data={data} queryFunction={queryFunction} />
  );
}

async function Product() {
  // const queryObj = {
  //   'category.pt': 'Vinho',
  //   'country.pt': { $in: ['Itália', 'França']},
  //   price: { $gt: 70, $lt: 100 },
  // };

  const data = await useFetchedData();
  // const query = await useQuery(queryObj);
  return (
    <ProductPageWithContent data={JSON.stringify(data)} queryFunction={useQuery} />
  );
}

export default Product;
