'use client';

import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';
import { imagesObjs } from './imagesObjs';

function Carousel() {
const [currentIndex, setCurrentIndex] = useState(0);

  function btnFirstImage() {
    setCurrentIndex(0);
  }

  function btnSecondImage() {
    setCurrentIndex(1);
  }

  return (
    <div
      className="relative flex h-96 overflow-auto hide-scrollbar"
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
      <div className="inset-x-0 bottom-3 flex absolute justify-center gap-3 mt-6 z-20">
        <button
          className="border-black bg-black w-2 h-2 
            rounded-full"
          onClick={() => btnFirstImage()}
        />
        <button
          className="border-black bg-black w-2 h-2 
            rounded-full"
          onClick={() => btnSecondImage()}
        />
      </div>
    </div>
  );
}

export default Carousel;
