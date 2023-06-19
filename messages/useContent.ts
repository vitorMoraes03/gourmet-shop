import { useTranslations } from 'next-intl';

export function useContent() {
  const t = useTranslations('content');

  return {
    content: {
      header: {
        title: t('header.title'),
        links: {
          blog: t('header.blog'),
          wines: t('header.wines'),
          conserves: t('header.conserves'),
          cheeses: t('header.cheeses'),
          all: t('header.all'),
        },
      },
    },
  };
}

export interface HeaderProps {
  title: string;
  links: {
    blog: string;
    wines: string;
    conserves: string;
    cheeses: string;
    all: string;
  };
}
