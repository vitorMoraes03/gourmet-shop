import { useState } from 'react';

function BtnSlide({
  handlerBtn,
  current,
  index,
}: {
  handlerBtn: () => void;
  current: number;
  index: number;
}) {
  function handleClick() {
    handlerBtn();
  }

  return (
    <div
      className={`${
        current === index ? 'border' : ''
      } rounded-full w-4 h-4 relative`}
    >
      <button
        className="bg-black w-3 h-3
      rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default BtnSlide;
