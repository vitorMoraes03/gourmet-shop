/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CarouselProps } from '../../../../messages/useContent';

interface SingleSlideProps {
  testingStyles?: string;
  current: number;
  index: number;
  text: CarouselProps;
}

function SingleSlide({
  testingStyles,
  current,
  index,
  text,
}: SingleSlideProps) {
  const [translateProps, setTranslateProps] = useState('');

  useEffect(() => {
    setTranslateProps(`${(index - current) * 100}%`);
  }, [current]);

  return (
    <div
      className={`${testingStyles} 
      absolute grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-96 
      shrink-0 w-full transition-transform duration-500 ease-in-out`}
      style={{ transform: `translateX(${translateProps})` }}
    >
      <Image
        src={text.src}
        alt={text.alt}
        width={Number(text.width)}
        height={Number(text.height)}
        className="h-full w-full object-cover"
      />
      <div
        className={`${text.bgColor} 
        grid text-center grid-auto-flow-column grid-auto-columns-1fr text-sm place-items-center
        p-4 pb-8 px-8
        md:px-32 md:py-20
        `}
      >
        <p className="uppercase text-sm -mb-2 font-semibold tracking-wider md:-mb-2">
          {text.paragraph}
        </p>
        <h1 className="text-3xl md:text-5xl font-title tracking-tight">
          {text.title}
        </h1>
        <p className="tracking-tight leading-4 px-7 md:text-base">
          {text.text}
        </p>
        <button
          type="button"
          className="bg-black text-white uppercase text-sm 
          font-bold w-3/5 justify-self-center md:self-start 
          md:w-3/6 md:py-2 mt-2 py-1"
        >
          {text.button}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
