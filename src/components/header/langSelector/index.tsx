import {
  LanguageContext,
  LanguageProvider,
} from '@/contexts/language';
import Link from 'next-intl/link';
import { useContext } from 'react';

function LangSelector() {
  const { defaultLang, setDefaultLang } =
    useContext(LanguageContext);

  return (
    <div className="flex gap-2 font-bold md:text-lg">
      {defaultLang === 'pt-BR' ? (
        <Link
          href={'/'}
          locale="en"
          className="custom-border"
          onClick={() => setDefaultLang('en')}
        >
          EN
        </Link>
      ) : (
        <Link
          href={'/'}
          locale="pt-BR"
          className="custom-border"
          onClick={() => setDefaultLang('pt-BR')}
        >
          PT
        </Link>
      )}
    </div>
  );
}

export default LangSelector;
