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
      } rounded-full md:w-4 md:h-4 w-3 h-3 relative`}
    >
      <button
        className="bg-black md:w-3 md:h-3 w-2 h-2
      rounded-full absolute transform -translate-x-1/2 
      -translate-y-1/2 top-1/2 left-1/2"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default BtnSlide;
