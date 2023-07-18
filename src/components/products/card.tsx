import { ProductInterface } from '@/utils/useFirstFetch';
import Image from 'next/image';
import Star from '../icons/star';
import HalfStar from '../icons/halfStar';
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
      <div className="h-4/6">
        <Image
          src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt.pt}
          className="mb-2 h-full w-full object-cover"
        />
      </div>
      <div className="text-sm sm:text-base">
        <h3 className="mt-1 font-title leading-relaxed tracking-tighter sm:mt-2 sm:text-2xl">
          {content.productName.pt}
        </h3>
        <div className="my-1 flex">
          {RatingStars(content.rating, content.id, idWhere)}
        </div>
        <p className="text-xs leading-3 text-darkerGray sm:text-base">
          {content.description.pt}
        </p>
        <p className="mt-1 italic">R${content.price}</p>
      </div>
    </>
  );
}

export default Card;
