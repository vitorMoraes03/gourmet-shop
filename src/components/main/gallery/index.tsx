// como vamos estruturar isso?
// no desktop é tipo um flex
// no mobile é tipo um carousel
// flex com overflow auto?

import Image from 'next/image';

function Gallery() {
  return (
    <div>
      <div>
        <p>Lorem lorem lorem</p>
        <h2>Lorem Lorem</h2>
      </div>
      <div>
        <div>
          <Image alt="lorem" src={''} />
          <p>Lorem lorem</p>
        </div>
        <div>
          <Image alt="lorem" src={''} />
          <p>Lorem lorem</p>
        </div>
        <div>
          <Image alt="lorem" src={''} />
          <p>Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
