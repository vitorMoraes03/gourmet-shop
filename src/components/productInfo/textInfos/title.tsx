import RatingStars from '@/utils/ratingStars';
import { ProductInterface } from '@/components/products';
import { LanguageContext } from '@/contexts/language';
import { useContext } from 'react';

function Title({
  products,
}: {
  products: ProductInterface;
}) {
  const idWhere = 'productInfo';
  const { defaultLang } = useContext(LanguageContext);
  const lang = defaultLang === 'en' ? 'en' : 'pt';

  function randonNumber() {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <div>
      <h1 className="font-title text-3xl tracking-tight">
        {products.productName[lang]}
      </h1>
      <h3 className="py-1 text-xs font-semibold uppercase tracking-widest">
        {products.subtitle[lang]}
      </h3>
      <div className="flex items-center gap-2">
        <div className="flex">
          {RatingStars(
            products.rating,
            products.id!,
            idWhere
          )}
        </div>
        <div>
          <p className="cursor-pointer text-xs text-darkerGray underline">
            {products.fakeNumbers.review} Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
