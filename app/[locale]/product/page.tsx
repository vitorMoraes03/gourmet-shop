import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFetchedData, {
  ProductInterface,
} from '@/utils/useFetchedData';

async function Product() {
  const data = await useFetchedData();
  return <ProductPageWithContent data={JSON.stringify(data)} />;
}

function ProductPageWithContent({ data }: { data: string }) {
  const { productsPage } = useContent();
  return <ProductsPage content={productsPage} data={data} />;
}

export default Product;
