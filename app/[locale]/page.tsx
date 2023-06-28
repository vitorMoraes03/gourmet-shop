import { useTranslations } from 'next-intl';
import Carousel from '@/components/main/carousel';
import { useContent } from '../../messages/useContent';
import Gallery from '@/components/main/gallery';

export default function Home() {
  const { main } = useContent();
  const carouselContent = main.carousel;
  const galleryContent = main.gallery;

  return (
    <main className="pt-[88px] md:pt-[128px]">
      <Carousel content={carouselContent}/>
      <Gallery content={galleryContent}/>
    </main>
  );
}
