import ProductInfo from '@/components/productInfo';
import { makeRequest } from '@/utils/query/makeRequest';

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

  console.log('products', products);

  return <ProductInfo products={products[0]}/>;
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
