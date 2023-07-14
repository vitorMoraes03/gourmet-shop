import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFetchedData, {
  ProductInterface,
} from '@/utils/useFetchedData';
import useQuery from '@/utils/useQuery';

function ProductPageWithContent({
  data,
}: {
  data: string;
}) {
  const { productsPage } = useContent();
  return (
    <ProductsPage content={productsPage} data={data} />
  );
}

// const queryObj = {
//   'category.pt': 'Vinho',
//   'country.pt': { $in: ['Itália', 'França']},
//   price: { $gt: 70, $lt: 100 },
// };

async function Product() {
  const queryObj = {
    'category.pt': 'Vinho',
    'country.pt': { $in: ['Itália', 'França']},
    price: { $gt: 70, $lt: 100 },
  };

  const data = await useFetchedData();
  const query = await useQuery(queryObj);
  console.log(query[0], query[1]);
  return (
    <ProductPageWithContent data={JSON.stringify(data)} />
  );
}

export default Product;
