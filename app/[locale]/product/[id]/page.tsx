import ProductInfo from '@/components/productInfo';
import { makeRequest } from '@/utils/query/makeRequest';
import { useContent } from '../../../../messages/useContent';
import { ProductInterface } from '@/components/products';

function ProductDynamicWithContent({
  products,
}: {
  products: ProductInterface;
}) {
  const { productIndividual } = useContent();

  return (
    <ProductInfo
      products={products}
      content={productIndividual}
    />
  );
}

async function ProductDynamic({
  params,
}: {
  params: { id: string };
}) {
  const decoded = decodeURI(params.id);
  const id = capitalizeWords(decoded.replace(/-/g, ' '));
  console.log(id);
  const { products } = await makeRequest(
    { 'productName.en': { $in: [id] } },
    {}
  );

  return (
    <ProductDynamicWithContent products={products[0]} />
  );
}

function capitalizeWords(s: string) {
  const words = s.split(' ');
  const capitalizedWords = words.map((word) => {
    if (
      word.length <= 3 &&
      word !== words[0] &&
      word !== word[words.length]
    )
      return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const result = capitalizedWords.join(' ');
  return result;
}

export default ProductDynamic;
