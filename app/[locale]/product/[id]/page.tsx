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

  // pq o codigo dessa pagina parece estar rodando, só de passar o mouse nos produtos???

  return <div>{products[0].productName.en}</div>;
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
