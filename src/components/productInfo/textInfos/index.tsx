import Link from 'next/link';
import { ProductInterface } from '../../products';
import Title from './title';
import TextTags from './textTags';

export function TextInfo({
  products,
}: {
  products: ProductInterface;
}) {
  return (
    <div>
      <div className="mb-8 text-sm">
        <Link href={'/product'}>/ Shop All </Link>
      </div>
      <Title products={products} />
      <TextTags products={products} />
    </div>
  );
}

export default TextInfo;
