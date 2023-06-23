import { useTranslations } from 'next-intl';
import Carousel from '@/components/main/carousel';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="pt-[88px] md:pt-[128px]">
      <Carousel />
    </main>
  );
}
