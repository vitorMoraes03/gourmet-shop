import { ProductInterface } from '../products';
import Button from './button';
import TextInfo from './textInfos';
import Image from 'next/image';

function ProductInfo({
  products,
}: {
  products: ProductInterface;
}) {
  console.log('width', products.image.width);
  console.log('height', products.image.height);

  // adicionar uma parte extra?
  // comprar agora, adicionar ao carrinho
  // devolução em até sete dias grátis, 

  return (
    <section className="header-spacing default-x-padding">
      <div className="grid grid-cols-2 gap-10 pt-20">
        <div className="justify-self-end col-span-1 max-h-[500px]">
          <Image
            alt={products.image.alt.en}
            src={products.image.url}
            width={products.image.width}
            height={products.image.height}
            className="h-[120%] object-cover"
          />
        </div>
        <div className="col-span-1">
          <TextInfo products={products} />
          <Button />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
