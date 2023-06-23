import Image from 'next/image';

function Carousel() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 h-96 md:h-96 border">
      <Image
        src={
          '/images/camille-brodard-f6Wpz1QPFZI-unsplash.jpg'
        }
        alt={'Alt para teste'}
        width={390}
        height={244}
        className="h-full"
      />
      <div
        className="grid py-4 px-8 bg-orange text-center 
      grid-auto-flow-column grid-auto-columns-1fr text-sm "
      >
        <p className="uppercase text-xs -mb-2">
          Lorem ipsum
        </p>
        <h2 className="text-2xl font-title">Solor Sit</h2>
        <p className="tracking-tight leading-4 px-7">
          Amet consectetur adipisicing elit. Ex nostrum
          voluptas sunt reprehenderit nam obcaecati,
          laboriosam quis sapiente?
        </p>
        <button
          type="button"
          className="bg-black text-white mt-2 py-1 uppercase 
          text-xs font-bold w-3/5 justify-self-center"
        >
          Reserve here
        </button>
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="border-black bg-black w-2 h-2 
            rounded-full"
          />
          <button
            className="border-black bg-black w-2 h-2 
            rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
