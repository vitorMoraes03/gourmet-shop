'use client';

import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';
import { imagesObjs } from './imagesObjs';

function Carousel() {
  function handleBtnPrevious() {}

  function handleBtnNext() {}

  return (
    <div
      className="relative flex 
      transition-transform duration-500 ease-in-out h-96"
    >
      <SingleSlide imageObj={imagesObjs[0]} />
      <SingleSlide imageObj={imagesObjs[1]} />
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
