import { ProductInterface } from '.';
import Image from 'next/image';
import RatingStars from '@/utils/ratingStars';
import { LanguageContext } from '@/contexts/language';
import { useContext, useEffect } from 'react';

function Card({
  content,
  idWhere,
}: {
  content: ProductInterface;
  idWhere: string;
}) {
  const { defaultLang } = useContext(LanguageContext);
  const lang = defaultLang === 'pt-BR' ? 'pt' : 'en';

  return (
    <>
      <div className="h-3/5">
        <Image
          src={content.image.url}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt[lang]}
          className="mb-2 h-full w-full object-cover"
        />
      </div>
      <div className="px-1 pt-1 text-sm sm:text-base">
        <h3 className="leading-relaxed tracking-tighter  sm:mt-2 sm:text-lg md:font-title md:text-2xl">
          {content.productName[lang]}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-widest">
          {content.subtitle[lang]}
        </p>
        <div className="my-1 flex">
          {RatingStars(
            content.rating,
            content.id!,
            idWhere
          )}
        </div>
        <p className="my-2 text-xs leading-tight text-darkerGray sm:text-[1rem]">
          {content.description[lang]}
        </p>
        <p className="mt-1 italic">R${content.price}</p>
      </div>
    </>
  );
}

export default Card;
