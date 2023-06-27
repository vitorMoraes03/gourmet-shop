/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SingleSlideProps {
  imageObj: {
    src: string;
    alt: string;
    width: number;
    height: number;
    bgColor: string;
    paragraph: string;
    title: string;
    text: string;
  };
  testingStyles?: string;
  current: number;
  index: number;
}

function SingleSlide({
  imageObj,
  testingStyles,
  current,
  index,
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
        src={imageObj.src}
        alt={imageObj.alt}
        width={imageObj.width}
        height={imageObj.height}
        className="h-full w-full object-cover"
      />
      <div
        className={`${imageObj.bgColor} 
        grid text-center grid-auto-flow-column grid-auto-columns-1fr text-sm place-items-center
        p-4 pb-8 px-8
        md:px-32 md:py-20
        `}
      >
        <p className="uppercase text-xs -mb-2 font-semibold tracking-wider md:self-end">
          {imageObj.paragraph}
        </p>
        <h2 className="text-2xl md:text-3xl font-title">
          Solor Sit
        </h2>
        <p className="tracking-tight leading-4 px-7">
          {imageObj.text}
        </p>
        <button
          type="button"
          className="bg-black text-white uppercase text-xs 
          font-bold w-3/5 justify-self-center md:self-start 
          md:w-3/6 md:py-2 mt-2 py-1"
        >
          {imageObj.title}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
