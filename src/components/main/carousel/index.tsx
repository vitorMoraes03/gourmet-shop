'use client';

import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';
import { imagesObjs } from './imagesObjs';
import BtnSlide from './btnSlide';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function btnFirstImage() {
    setCurrentIndex(0);
  }

  function btnSecondImage() {
    setCurrentIndex(1);
  }

  // scrollbar-width: none;
  // -ms-overflow-style: none;
  // &::-webkit-scrollbar {
  //   display: none;
  // }

  return (
    <div
      className="relative flex h-96 overflow-auto"
      style={
        {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        } as React.CSSProperties
      }
    >
      <SingleSlide
        imageObj={imagesObjs[0]}
        testingStyles={''}
        current={currentIndex}
        index={0}
      />
      <SingleSlide
        imageObj={imagesObjs[1]}
        testingStyles={'translate-x-full'}
        current={currentIndex}
        index={1}
      />
      <div className="inset-x-0 bottom-3 md:bottom-4 flex absolute justify-center gap-3 z-20">
        <BtnSlide handlerBtn={btnFirstImage} />
        <BtnSlide handlerBtn={btnSecondImage} />
      </div>
    </div>
  );
}

export default Carousel;
