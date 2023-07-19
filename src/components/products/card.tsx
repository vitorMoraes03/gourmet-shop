import { ProductInterface } from '.';
import Image from 'next/image';
import RatingStars from '@/utils/ratingStars';

function Card({
  content,
  idWhere,
}: {
  content: ProductInterface;
  idWhere: string;
}) {
  return (
    <>
      <div className="h-3/5">
        <Image
          src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt.pt}
          className="mb-2 h-full w-full object-cover"
        />
      </div>
      <div className="px-1 pt-1 text-sm sm:text-base">
        <h3 className="my-1 leading-relaxed tracking-tighter  sm:mt-2 sm:text-lg md:font-title md:text-2xl">
          {content.productName.pt}
        </h3>
        <div className="my-1 flex">
          {RatingStars(
            content.rating,
            content.id!,
            idWhere
          )}
        </div>
        <p className="my-2 text-xs leading-tight text-darkerGray sm:text-[1rem]">
          {content.description.pt}
        </p>
        <p className="mt-1 italic">R${content.price}</p>
      </div>
    </>
  );
}

export default Card;
