import { ProductInterface } from '@/utils/useFetchedData';
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
      <div>
        <Image
          src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt.pt}
          className="mb-2 h-[200px] w-[113px] object-cover sm:h-[325px] sm:w-[260px]"
        />
      </div>
      <div className="text-sm sm:text-base">
        <h3 className="font-title leading-relaxed tracking-tighter sm:text-2xl">
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
