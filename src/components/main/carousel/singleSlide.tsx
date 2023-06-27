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
}

function SingleSlide({
  imageObj,
  testingStyles,
}: SingleSlideProps) {
  return (
    <div
      className={`${testingStyles} 
      absolute grid grid-rows-2 md:grid-cols-2 h-96 md:h-96 shrink-0 w-full`}
    >
      <Image
        src={imageObj.src}
        alt={imageObj.alt}
        width={imageObj.width}
        height={imageObj.height}
        className="h-full"
      />
      <div
        className={`${imageObj.bgColor} grid p-4 pb-8 px-8 text-center 
        grid-auto-flow-column grid-auto-columns-1fr text-sm`}
      >
        <p className="uppercase text-xs -mb-2">
          {imageObj.paragraph}
        </p>
        <h2 className="text-2xl font-title">Solor Sit</h2>
        <p className="tracking-tight leading-4 px-7">
          {imageObj.text}
        </p>
        <button
          type="button"
          className="bg-black text-white mt-2 py-1 uppercase 
          text-xs font-bold w-3/5 justify-self-center"
        >
          {imageObj.title}
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
