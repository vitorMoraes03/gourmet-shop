import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';
import useFetchedData, {
  ProductInterface,
} from '@/utils/useFetchedData';

async function Product() {
  const data = await useFetchedData();
  return <ProductPageWithContent data={data} />;
}

function ProductPageWithContent({ data }: { data: ProductInterface[] }) {
  const { productsPage } = useContent();
  console.log('productsPage', productsPage);
  return <ProductsPage content={productsPage} data={data} />;
}

export default Product;
