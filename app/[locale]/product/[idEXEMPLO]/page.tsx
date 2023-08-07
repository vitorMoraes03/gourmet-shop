/////////////////////////
/////////////////////////
////// REMOVER //////////
/////////////////////////
/////////////////////////

import { ProductPageWithContent } from '../page';
import useQuery from '@/utils/query/useQuery';

async function ProductDynamic({
  params,
}: {
  params: { id: string };
}) {
  const { products } = await useQuery({}, {});
  const id = params.id;

  // old-world-wines, new-huaha,

  // se eu tenho o id aqui
  // agora eu vou ter que fazer um useQuery direcionado
  // como?? Na verdade, faria mais sentido fazer um setFilter...
  // setFilter({ id bla bla })

  return (
    <ProductPageWithContent
      data={JSON.stringify(products)}
      queryFunction={useQuery}
      params={id}
    />
  );
}

export default ProductDynamic;
