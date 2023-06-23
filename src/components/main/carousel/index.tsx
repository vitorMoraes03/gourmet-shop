import Image from 'next/image';
import SingleSlide from './singleSlide';

function Carousel() {
  return (
    <SingleSlide
      src={
        '/images/camille-brodard-f6Wpz1QPFZI-unsplash.jpg'
      }
      width={390}
      height={244}
      alt={'Alt para teste'}
      paragraph={'Lorem ipsum'}
      text={
        'Amet consectetur adipisicing elit. Ex nostru voluptas sunt reprehenderit nam obcaecati, laboriosam quis sapiente?'
      }
      title={'Solor Sit'}
    />
  );
}

export default Carousel;
