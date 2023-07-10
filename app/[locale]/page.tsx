import Carousel from '@/components/main/carousel';
import { useContent } from '../../messages/useContent';
import Gallery from '@/components/main/gallery';
import Quote from '@/components/main/quote';
import { MongoClient } from 'mongodb';
import ButtonTest, {
  Bananas,
} from '@/components/testingapi/testing';

export default function Home({
  bananasss,
}: {
  bananasss: Bananas[];
}) {
  const { main } = useContent();
  const carouselContent = main.carousel;
  const galleryContent = main.gallery;
  const quoteContent = main.quote;

  return (
    <main className="pt-[88px] md:pt-[128px]">
      <Carousel content={carouselContent} />
      <Gallery content={galleryContent} />
      <Quote content={quoteContent} />
      {/* <ButtonTest /> */}
      <div>
        {bananasss?.map((bananas: Bananas) => (
          <div key={bananas.id}>
            <p>{bananas.userName}</p>
            <p>{bananas.nickname}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
