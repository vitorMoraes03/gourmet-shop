import Image from 'next/image';

interface SingleSlideProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  paragraph: string;
  text: string;
  title: string;
}

function SingleSlide({
  src,
  width,
  height,
  alt,
  paragraph,
  text,
  title,
}: SingleSlideProps) {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 h-96 md:h-96 border">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full"
      />
      <div
        className="grid py-4 px-8 bg-orange text-center 
      grid-auto-flow-column grid-auto-columns-1fr text-sm "
      >
        <p className="uppercase text-xs -mb-2">
          {paragraph}
        </p>
        <h2 className="text-2xl font-title">Solor Sit</h2>
        <p className="tracking-tight leading-4 px-7">
          {text}
        </p>
        <button
          type="button"
          className="bg-black text-white mt-2 py-1 uppercase 
          text-xs font-bold w-3/5 justify-self-center"
        >
          {title}
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

export default SingleSlide;
