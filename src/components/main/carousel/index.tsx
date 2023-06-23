import Image from 'next/image';
import SingleSlide from './singleSlide';

function Carousel() {
  return (
    <div className='relative flex overflow-x-auto'>
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
        bgColor={'bg-orange'}
      />
      <SingleSlide
        src={
          '/images/hermes-rivera-aK6WGqxyHFw-unsplash.jpg'
        }
        width={600}
        height={400}
        alt={'Alt para teste'}
        paragraph={'Lorem ipsum'}
        text={
          'Amet consectetur adipisicing elit. Ex nostru voluptas sunt reprehenderit nam obcaecati, laboriosam quis sapiente?'
        }
        title={'Solor Sit'}
        bgColor={'bg-green'}
      />
      <div className="flex absolute justify-center gap-3 mt-6">
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
  );
}

export default Carousel;
