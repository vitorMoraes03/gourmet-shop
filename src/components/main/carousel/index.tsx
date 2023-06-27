'use client';

import SingleSlide from './singleSlide';
import { useRef, useState } from 'react';
import { imagesObjs } from './imagesObjs';

// Como vou movimentar? translate-x-full, 200%, 300% etc... ? translate-x-[123px]?
// Bora testar os dois?

//

// Como vou pegar o tamanho da página?

function Carousel() {
  function btnFirstImage() {}

  function btnSecondImage() {}

  return (
    <div
      className="relative flex transition-transform duration-500 
      ease-in-out h-96 overflow-auto hide-scrollbar"
    >
      <SingleSlide
        imageObj={imagesObjs[0]}
        testingStyles={''}
      />
      <SingleSlide
        imageObj={imagesObjs[1]}
        testingStyles={'translate-x-full'}
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
