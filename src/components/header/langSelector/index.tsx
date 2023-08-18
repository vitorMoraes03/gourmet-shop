import { LanguageContext } from '@/contexts/language';
import Link from 'next-intl/link';
import { useContext } from 'react';
import Image from 'next/image';

function LangSelector() {
  const { defaultLang } = useContext(LanguageContext);

  return (
    <div className="flex gap-2 font-bold md:text-lg">
      {defaultLang === 'pt-BR' ? (
        <Link
          href={'/'}
          locale="en"
          className="custom-border"
        >
          <Image
            src="/images/us.png"
            alt="teste"
            width={20}
            height={20}
            title="English"
          />
        </Link>
      ) : (
        <Link
          href={'/'}
          locale="pt-BR"
          className="custom-border"
        >
          <Image
            src="/images/br.png"
            alt="teste"
            width={20}
            height={20}
            title="Português"
          />
        </Link>
      )}
    </div>
  );
}

export default LangSelector;
