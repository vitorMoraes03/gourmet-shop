'use client';

import Image from 'next/image';
import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';

// carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
// const pageWidth = carouselRef.current?.offsetWidth;

// eu posso adicionar uma classe em cada uma que vai mover, através de ref

// eu posso trabalhar com state? ter uma valor dinamico na classe, que pode ser um estado?
// que muda e tal...

// estado em cada singleSide para ser o valor da classe
//

function Carousel() {
  const [moveCarousel, setMoveCarousel] = useState<
    'rigth' | 'left' | null
  >(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  // const carouselWidth = carouselRef.current?.offsetWidth;

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
