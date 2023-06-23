'use client';

import Image from 'next/image';
import SingleSlide from './singleSlide';
import { useRef } from 'react';

// carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
// vc vai translatar x pixels baseado na largura da pagina
// cade a largura da pagina?

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  let currentPosition = 0;

  function handleBtnPrevious() {
    const pageWidth = carouselRef.current?.offsetWidth;
    if (carouselRef.current === null) return;
    if (pageWidth === undefined) return;
    currentPosition -= pageWidth;
    console.log(currentPosition);
    carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
  }

  function handleBtnNext() {
    const pageWidth = carouselRef.current?.offsetWidth;
    if (carouselRef.current === null) return;
    if (pageWidth === undefined) return;
    currentPosition += pageWidth;
    console.log(currentPosition);
    carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
  }

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
