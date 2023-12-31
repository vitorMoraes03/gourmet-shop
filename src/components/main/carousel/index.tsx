'use client';

import SingleSlide from './singleSlide';
import { useState } from 'react';
import BtnSlide from './button';
import { CarouselProps } from '../../../../messages/useContent';

function Carousel({ content }: { content: CarouselProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function btnFirstImage() {
    setCurrentIndex(0);
  }

  function btnSecondImage() {
    setCurrentIndex(1);
  }

  return (
    <div
      className={`relative flex h-[500px] sm:h-96 overflow-hidden`}
      style={
        {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::WebkitScrollbar': { display: 'none' },
        } as React.CSSProperties
      }
    >
      <SingleSlide
        testingStyles={''}
        current={currentIndex}
        index={0}
        text={content[0]}
      />
      <SingleSlide
        testingStyles={'translate-x-full'}
        current={currentIndex}
        index={1}
        text={content[1]}
      />
      <div className="inset-x-0 bottom-3 md:bottom-4 flex absolute justify-center gap-3 z-20">
        <BtnSlide
          handlerBtn={btnFirstImage}
          current={currentIndex}
          index={0}
        />
        <BtnSlide
          handlerBtn={btnSecondImage}
          current={currentIndex}
          index={1}
        />
      </div>
    </div>
  );
}

export default Carousel;
