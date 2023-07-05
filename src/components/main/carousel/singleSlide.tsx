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
      absolute grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-96 
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
        className={`${
          text.bgColor === 'orange'
            ? 'bg-orange'
            : 'bg-green'
            
        } 
        grid text-center grid-auto-flow-column grid-auto-columns-1fr text-sm place-items-center
        p-4 pb-8 px-2 
        md:px-20 md:py-16
        lg:px-32 lg:py-20
        `}
      >
        <p className="uppercase text-xs -mb-2 font-semibold tracking-wider">
          {text.paragraph}
        </p>
        <h1 className="text-2xl md:text-5xl font-title tracking-tight">
          {text.title}
        </h1>
        <p className="tracking-tight leading-4 md:px-7 px-10 text-sm md:text-base">
          {text.text}
        </p>
        <button
          type="button"
          className="black-button py-2 md:text-sm text-xs
          font-bold w-40 justify-self-center md:self-start 
          md:w-48 mt-2"
        >
          {text.button}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
