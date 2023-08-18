

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
      } relative h-3 w-3 rounded-full md:h-4 md:w-4`}
    >
      <button
        className="absolute left-1/2 top-1/2 h-2 w-2
      -translate-x-1/2 -translate-y-1/2 transform rounded-full 
      bg-black md:h-3 md:w-3"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default BtnSlide;
