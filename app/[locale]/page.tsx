import { useTranslations } from 'next-intl';
import Carousel from '@/components/main/carousel';
import { useContent } from '../../messages/useContent';

export default function Home() {
  const { main } = useContent();
  const carouselContent = main.carousel;

  return (
    <main className="pt-[88px] md:pt-[128px]">
      <Carousel content={carouselContent}/>
    </main>
  );
}
