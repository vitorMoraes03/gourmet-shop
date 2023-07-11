import { ProductInterface } from '@/utils/useFetchedData';
import Image from 'next/image';
import Star from '../icons/star';
import HalfStar from '../icons/halfStar';

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
      <div className="text-sm sm:text-base">
        <h3 className="font-title leading-relaxed tracking-tighter sm:text-2xl">
          {content.productName.pt}
        </h3>
        <div className="my-1 flex">
          {RatingStars(content.rating)}
        </div>
        <p className="text-xs sm:text-base leading-3 text-darkerGray">
          {content.description.pt}
        </p>
        <p className='mt-1 italic'>R${content.price}</p>
      </div>
    </>
  );
}

function RatingStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} />);
  }

  if (halfStar) {
    stars.push(<HalfStar key={fullStars} />);
  }

  return <>{stars}</>;
}

export default Card;
