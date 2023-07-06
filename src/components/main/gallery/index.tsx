// como vamos estruturar isso?
// no desktop é tipo um flex
// no mobile é tipo um carousel
// flex com overflow auto?

import Image from 'next/image';
import { GalleryProps } from '../../../../messages/useContent';
import Link from 'next/link';

function Gallery({ content }: { content: GalleryProps }) {
  return (
    <div className="md:m-16 m-6">
      <div className="text-center">
        <p className="uppercase text-green tracking-wider font-semibold mb-2">
          {content.subtitle}
        </p>
        <h1 className="md:text-5xl text-3xl font-title tracking-tight">
          {content.title}
        </h1>
      </div>
      <div
        className="flex gap-2 md:gap-4 mt-6 md:mt-12 overflow-x-auto"
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
            className="lg:w-1/3 w-64 shrink-0"
          >
            <Image
              alt={image.alt}
              src={image.src}
              width={Number(image.width)}
              height={Number(image.height)}
              className="w-full h-[468px] object-cover"
            />
            <Link href={''}>
              <p className="text-2xl md:h-8 h-7 font-title tracking-tight mt-3 hover:border-b-[1.5px] inline-block">
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
