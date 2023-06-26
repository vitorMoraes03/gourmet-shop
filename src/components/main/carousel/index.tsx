'use client';

import Image from 'next/image';
import SingleSlide from './singleSlide';
import { useRef } from 'react';

// carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
// const pageWidth = carouselRef.current?.offsetWidth;

function Carousel() {

  function handleBtnPrevious() {
  }

  function handleBtnNext() {
  }

  return (
    <div
      className="relative flex 
      transition-transform duration-500 ease-in-out h-96"
    >
      <SingleSlide
        src={
          '/images/camille-brodard-f6Wpz1QPFZI-unsplash.jpg'
        }
        width={390}
        height={244}
        alt={'Alt para teste'}
        paragraph={'Lorem ipsum'}
        text={
          'Amet consectetur adipisicing elit. Ex nostru voluptas sunt reprehenderit nam obcaecati, laboriosam quis sapiente?'
        }
        title={'Solor Sit'}
        bgColor={'bg-orange'}
      />
      <SingleSlide
        src={
          '/images/hermes-rivera-aK6WGqxyHFw-unsplash.jpg'
        }
        width={600}
        height={400}
        alt={'Alt para teste'}
        paragraph={'Lorem ipsum'}
        text={
          'Amet consectetur adipisicing elit. Ex nostru voluptas sunt reprehenderit nam obcaecati, laboriosam quis sapiente?'
        }
        title={'Solor Sit'}
        bgColor={'bg-green'}
      />
      <div className="inset-x-0 bottom-3 flex absolute justify-center gap-3 mt-6">
        <button
          className="border-black bg-black w-2 h-2 
            rounded-full"
          onClick={() => handleBtnPrevious()}
        />
        <button
          className="border-black bg-black w-2 h-2 
            rounded-full"
          onClick={() => handleBtnNext()}
        />
      </div>
    </div>
  );
}

export default Carousel;
