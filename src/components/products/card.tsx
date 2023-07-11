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
          className="mb-2 h-[200px] w-[113px] object-cover sm:h-[325px] sm:w-[260px]"
        />
      </div>
      <div className="text-sm">
        <h3 className="font-title sm:text-lg leading-relaxed tracking-tighter">
          {content.productName.pt}
        </h3>
        <span>{content.rating}</span>
        <p className="text-darkerGray leading-3 text-xs">
          {content.description.pt}
        </p>
        <p>R${content.price}</p>
      </div>
    </>
  );
}

export default Card;
