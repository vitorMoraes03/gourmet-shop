import ProductInfo from '@/components/productInfo';
import { makeRequest } from '@/utils/query/makeRequest';
import {
  ProductIndividualProps,
  useContent,
} from '../../../../messages/useContent';
import { ProductInterface } from '@/components/products';

function ProductDynamicWithContent({
  // params,
  products,
}: {
  // params: { id: string };
  products: ProductInterface;
}) {
  //  const id = capitalizeWords(params.id.replace(/-/g, ' '));
  const { productIndividual } = useContent();

  // const { products } = await makeRequest(
  //   { 'productName.en': { $in: [id] } },
  //   {}
  // );

  return (
    <ProductInfo products={products} content={productIndividual} />
  );
}

async function ProductDynamic({
  params,
}: {
  params: { id: string };
}) {
  const id = capitalizeWords(params.id.replace(/-/g, ' '));
  

  const { products } = await makeRequest(
    { 'productName.en': { $in: [id] } },
    {}
  );

  return (
    <ProductDynamicWithContent
      products={products[0]}
    />
  );
}

function capitalizeWords(s: string) {
  const words = s.split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const result = capitalizedWords.join(' ');
  return result;
}

export default ProductDynamic;
