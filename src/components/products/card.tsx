import { ProductInterface } from '@/utils/useFetchedData';
import Image from 'next/image';

function Card({ content }: { content: ProductInterface }) {
  return (
    <>
      <div>
        <Image
          src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt.pt}
          className="object-cover"
        />
      </div>
      <div className="text-xs">
        <h3 className="font-title text-sm tracking-tighter">
          {content.productName.pt}
        </h3>
        <span>{content.rating}</span>
        <p className="text-darkerGray">
          {content.description.pt}
        </p>
        <p>R${content.price}</p>
      </div>
    </>
  );
}

export default Card;
