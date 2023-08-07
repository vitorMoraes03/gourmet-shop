import { ProductPageWithContent } from '../page';
import useQuery from '@/utils/query/useQuery';

async function ProductDynamic({
  params,
}: {
  params: { id: string };
}) {
  const { products } = await useQuery({}, {});
  const id = params.id;

  // se eu tenho o id aqui
  // agora eu vou ter que fazer um useQuery direcionado
  // como??

  return (
    <ProductPageWithContent
      data={JSON.stringify(products)}
      queryFunction={useQuery}
    />
  );
}

export default ProductDynamic;
