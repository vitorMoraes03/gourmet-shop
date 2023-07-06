import ProductsPage from '@/components/products';
import { useContent } from '../../../messages/useContent';

function Product() {
  const { productsPage } = useContent();

  return <ProductsPage content={productsPage} />;
}

export default Product;
