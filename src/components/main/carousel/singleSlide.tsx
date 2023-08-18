/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CarouselProps } from '../../../../messages/useContent';
import Link from 'next/link';

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
      absolute grid h-full w-full shrink-0 grid-rows-2 
      transition-transform duration-500 ease-in-out sm:grid-cols-2 sm:grid-rows-1`}
      style={{ transform: `translateX(${translateProps})` }}
    >
      <Image
        src={text.src}
        alt={text.alt}
        width={Number(text.width)}
        height={Number(text.height)}
        className="h-full w-full object-cover opacity-90"
      />
      <div
        className={`${
          text.bgColor === 'orange'
            ? 'bg-orange'
            : 'bg-green'
        } 
        grid grid-cols-1 items-center gap-2 px-4 py-10
        text-center
        text-sm xs:px-16
        sm:px-20 sm:py-16
        lg:px-32 lg:py-20
        xl:px-40 
        `}
      >
        <p className="-mb-1 hidden text-xs font-semibold uppercase tracking-wider sm:inline-block">
          {text.paragraph}
        </p>
        <h1 className="font-title text-2xl tracking-tight sm:text-3xl md:text-4xl">
          {text.title}
        </h1>
        <p className="text-sm leading-4 tracking-tight md:text-base">
          {text.text}
        </p>
        <Link href={'/product'}>
          <button
            type="button"
            className="black-button mt-2 w-40
           justify-self-center text-xs md:w-48 
          md:self-start md:text-sm"
          >
            {text.button}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SingleSlide;
