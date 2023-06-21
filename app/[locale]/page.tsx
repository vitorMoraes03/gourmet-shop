import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="h-screen border bg-green text-8xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Ex, placeat. Eligendi fuga rerum exercitationem, repellat, 
      {t('title')}
    </main>
  );
}
