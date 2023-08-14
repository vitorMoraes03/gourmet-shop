import Image from 'next/image';
import { GalleryProps } from '../../../../messages/useContent';
import Link from 'next/link';

function Gallery({ content }: { content: GalleryProps }) {
  return (
    <div className="m-6 md:m-16">
      <div className="text-center">
        <p className="mb-2 font-semibold uppercase tracking-wider text-green">
          {content.subtitle}
        </p>
        <h1 className="font-title text-3xl tracking-tight md:text-5xl">
          {content.title}
        </h1>
      </div>
      <div
        className="mt-6 flex gap-2 overflow-x-auto md:mt-12 md:gap-4"
        style={
          {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::WebkitScrollbar': { display: 'none' },
          } as React.CSSProperties
        }
      >
        {content.images.map((image, index) => (
          <div
            key={`imgGallery-${index}`}
            className="w-64 shrink-0 lg:w-1/3"
          >
            <Image
              alt={image.alt}
              src={image.src}
              width={Number(image.width)}
              height={Number(image.height)}
              className="h-[468px] w-full object-cover"
            />
            <Link href={'/teste'}>
              <p className="mt-3 inline-block h-7 font-title text-2xl tracking-tight hover:border-b-[1.5px] md:h-8">
                {image.text}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
