import { ProductInterface } from '../products';
import Button from './button';
import PurchaseInfo from './purchaseInfo';
import TextInfo from './textInfos';
import Image from 'next/image';

function ProductInfo({
  products,
}: {
  products: ProductInterface;
}) {
  console.log('width', products.image.width);
  console.log('height', products.image.height);

  // nao gostei disso, talvez pegar algum dado do proprio produto, p ficar mais estavel
  function randomNum() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <section className="header-spacing default-x-padding">
      <div className="grid grid-cols-2 gap-10 pt-20">
        <div className="col-span-1 h-[630px] w-[420px] justify-self-end">
          <Image
            alt={products.image.alt.en}
            src={products.image.url}
            width={products.image.width}
            height={products.image.height}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-1 h-full">
          <TextInfo products={products} />
          <div className="grid h-1/3 grid-cols-2">
            <PurchaseInfo />
            <div className="flex flex-col justify-center gap-2">
              <p className='mb-1 italic text-sm'>
                Estoque disponível:{' '}
                <span className="font-semibold">
                  {randomNum()} unidades
                </span>
              </p>
              <Button
                stylesBtn="black-button"
                text="Compre agora"
              />
              <Button
                stylesBtn="white-button"
                text="Adicionar ao carrinho"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;