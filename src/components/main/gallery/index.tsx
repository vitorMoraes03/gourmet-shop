// como vamos estruturar isso?
// no desktop é tipo um flex
// no mobile é tipo um carousel
// flex com overflow auto?

import Image from 'next/image';
import { GalleryProps } from '../../../../messages/useContent';

function Gallery({ content }: { content: GalleryProps }) {
  return (
    <div>
      <div>
        <p>{content.subtitle}</p>
        <h2>{content.title}</h2>
      </div>
      {content.images.map((image, index) => (
        <div key={index}>
          <Image
            alt={image.alt}
            src={image.src}
            width={Number(image.width)}
            height={Number(image.height)}
          />
          <p>{image.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
