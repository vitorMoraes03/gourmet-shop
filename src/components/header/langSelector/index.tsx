import Link from 'next-intl/link';
import { useState } from 'react';

function LangSelector() {
  const [defaultLang, setDefaultLang] = useState<
    'pt-BR' | 'en'
  >('pt-BR');

  return (
    <div className="font-bold flex gap-2 md:text-lg">
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
