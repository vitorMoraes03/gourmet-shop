import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFetchedData, {
  ProductInterface,
} from '@/utils/useFetchedData';
import { use } from 'react';
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

async function Product() {
  const data = await useFetchedData();
  const query = await useQuery({ 'category.pt': 'Vinho' });
  console.log(query[0], query[1]);
  return (
    <ProductPageWithContent data={JSON.stringify(data)} />
  );
}

export default Product;
