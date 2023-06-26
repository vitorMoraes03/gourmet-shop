'use client';

import Image from 'next/image';
import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';

function Carousel() {
  const [moveCarousel, setMoveCarousel] = useState<
    'rigth' | 'left' | null
  >(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleBtnPrevious() {}

  function handleBtnNext() {}

  return (
    <div
      className="relative flex 
      transition-transform duration-500 ease-in-out h-96"
      ref={carouselRef}
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
        position={0}
        moveCarousel={moveCarousel}
        carouselRef={carouselRef}
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
        position={1}
        moveCarousel={moveCarousel}
        carouselRef={carouselRef}
      />
      <div className="inset-x-0 bottom-3 flex absolute justify-center gap-3 mt-6 z-20">
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
