import Link from 'next/link';
import { ProductInterface } from '../../products';
import Title from './title';
import TextTags from './textTags';
import { ProductIndividualProps } from '../../../../messages/useContent';

export function TextInfo({
  products,
  content,
}: {
  products: ProductInterface;
  content: ProductIndividualProps;
}) {
  return (
    <div className='h-2/3'>
      <div className="mb-8 text-sm">
        <Link href={'/product'}>/ {content.returnLink} </Link>
      </div>
      <Title products={products} />
      <TextTags products={products} content={content.description}/>
    </div>
  );
}

export default TextInfo;
