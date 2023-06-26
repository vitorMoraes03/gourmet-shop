function BtnSlide({
  handlerBtn,
}: {
  handlerBtn: () => void;
}) {
  return (
    <div className="rounded-full w-4 h-4 relative z-20">
      <button
        className="bg-black w-3 h-3
      rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        onClick={() => handlerBtn()}
      />
    </div>
  );
}

export default BtnSlide;
