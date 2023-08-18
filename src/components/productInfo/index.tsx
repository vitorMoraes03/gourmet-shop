'use client';

import { ProductIndividualProps } from '../../../messages/useContent';
import { ProductInterface } from '../products';
import Button from './button';
import PurchaseInfo from './purchaseInfo';
import TextInfo from './textInfos';
import Image from 'next/image';
import { useContext } from 'react';
import { ProductsContext } from '@/contexts/products';

function ProductInfo({
  products,
  content,
}: {
  products: ProductInterface;
  content: ProductIndividualProps;
}) {
  const { cart, setCart } = useContext(ProductsContext);

  function addCart() {
    setCart([...cart, products]);
  }

  return (
    <section className="header-spacing pb-10 sm:pb-20">
      <div className="grid gap-3 sm:grid-cols-2 sm:pt-20 lg:gap-10">
        <div className="col-span-1 w-screen justify-self-end sm:h-[630px] sm:w-[420px]">
          <Image
            alt={products.image.alt.en}
            src={products.image.url}
            width={products.image.width}
            height={products.image.height}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="default-x-padding col-span-1 h-full">
          <TextInfo products={products} content={content} />
          <div className="grid h-1/3 lg:grid-cols-2">
            <PurchaseInfo content={content} />
            <div className="order-first flex flex-col justify-center gap-2 lg:order-last">
              <p className="mb-1 hidden text-sm italic lg:inline-block">
                {content.stockMsg}:
                <span className="font-semibold">
                  {products.fakeNumbers.stock}
                </span>
              </p>
              {/* <Button
                stylesBtn="black-button"
                text={content.buttons.buyNow}
              /> */}
              <Button
                stylesBtn="white-button"
                text={content.buttons.addToCart}
                handleClick={addCart}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
