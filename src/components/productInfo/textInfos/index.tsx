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
      <Link href={'/product'} className="text-sm">
        Shop All /
      </Link>
      <Title products={products} />
      <TextTags products={products} />
    </div>
  );
}

export default TextInfo;
