import RatingStars from '@/utils/ratingStars';
import { ProductInterface } from '@/components/products';

function Title({
  products,
}: {
  products: ProductInterface;
}) {
  const idWhere = 'productInfo';

  return (
    <div>
      <h1 className="font-title text-3xl tracking-tight">
        {products.productName.en}
      </h1>
      <h3 className="text-xs font-semibold uppercase tracking-widest">
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
          <p className="text-xs text-darkerGray underline">
            1230 Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
