import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SingleSlideProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  paragraph: string;
  text: string;
  title: string;
  bgColor: string;
  position: number;
  moveCarousel: 'rigth' | 'left' | null;
  carouselRef: React.RefObject<HTMLDivElement>;
}

function SingleSlide({
  src,
  width,
  height,
  alt,
  paragraph,
  text,
  title,
  bgColor,
  position,
  moveCarousel,
  carouselRef,
}: SingleSlideProps) {
  const [utilitiesCarousel, setUtilitiesCarousel] =
    useState<string>('');

  useEffect(() => {
    const parent = carouselRef.current;
    if (parent) {
      carouselMovement(parent.offsetWidth);
    } 
  }, []);

  // como fazer o alinhamento inicial?
  // preciso ter um array que controla todos
  // e a cada indice vamos movimentando x vezes o indice

  // cada singleSlide tem que saber qual é a sua posição
  // e ele vai receber um comando mover para a direita etc...

  // pos * translate-x-full

  function carouselMovement(width: number) {
    const valueToMove = position * width;
    setUtilitiesCarousel(`translate-x-[${valueToMove}px]`);
  }

  return (
    <div
      className={`${utilitiesCarousel} ${position === 0 ? 'z-10' : ''} absolute 
      grid grid-rows-2 md:grid-cols-2 h-96 md:h-96 shrink-0 w-full`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full"
      />
      <div
        className={`${bgColor} grid p-4 pb-8 px-8 text-center 
        grid-auto-flow-column grid-auto-columns-1fr text-sm`}
      >
        <p className="uppercase text-xs -mb-2">
          {paragraph}
        </p>
        <h2 className="text-2xl font-title">Solor Sit</h2>
        <p className="tracking-tight leading-4 px-7">
          {text}
        </p>
        <button
          type="button"
          className="bg-black text-white mt-2 py-1 uppercase 
          text-xs font-bold w-3/5 justify-self-center"
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
