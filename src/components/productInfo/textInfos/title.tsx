import RatingStars from '@/utils/ratingStars';
import { ProductInterface } from '@/components/products';

function Title({
  products,
}: {
  products: ProductInterface;
}) {
  const idWhere = 'productInfo';

  function randonNumber() {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <div>
      <h1 className="font-title text-3xl tracking-tight">
        {products.productName.en}
      </h1>
      <h3 className="py-1 text-xs font-semibold uppercase tracking-widest">
        Subtitle
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
            {randonNumber()} Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
