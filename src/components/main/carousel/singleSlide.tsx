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
      absolute grid h-96 w-full shrink-0 grid-rows-2 
      transition-transform duration-500 ease-in-out sm:grid-cols-2 sm:grid-rows-1`}
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
        grid-auto-flow-column grid-auto-columns-1fr grid place-items-center p-4 px-2
        pb-8 text-center text-sm 
        md:px-20 md:py-16
        lg:px-32 lg:py-20
        `}
      >
        <p className="-mb-2 text-xs font-semibold uppercase tracking-wider">
          {text.paragraph}
        </p>
        <h1 className="font-title text-2xl tracking-tight md:text-5xl">
          {text.title}
        </h1>
        <p className="px-10 text-sm leading-4 tracking-tight md:px-7 md:text-base">
          {text.text}
        </p>
        <button
          type="button"
          className="black-button mt-2 w-40
           justify-self-center text-xs md:w-48 
          md:self-start md:text-sm"
        >
          {text.button}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
