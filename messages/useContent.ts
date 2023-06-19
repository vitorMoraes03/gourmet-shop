import { useTranslations } from 'next-intl';

export function useContent() {
  const t = useTranslations('content');

  return {
    content: {
      header: {
        title: t('header.links.title'),
        links: {
          blog: t('header.links.blog'),
          wines: t('header.links.wines'),
          preserves: t('header.links.preserves'),
          cheeses: t('header.links.cheeses'),
          all: t('header.links.all'),
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
