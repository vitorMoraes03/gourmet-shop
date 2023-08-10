import { ProductInterface } from '../products';
import Button from './button';
import TextInfo from './textInfos';
import Image from 'next/image';

function ProductInfo({
  products,
}: {
  products: ProductInterface;
}) {
  return (
    <section className="header-spacing">
      <div className=''>
        <Image
          alt={products.image.alt.en}
          src={products.image.url}
          width={products.image.width}
          height={products.image.height}
        />
        <TextInfo products={products} />
        <Button />
      </div>
    </section>
  );
}

export default ProductInfo;
