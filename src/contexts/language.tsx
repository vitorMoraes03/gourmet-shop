'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';

export const LanguageContext = React.createContext({
  defaultLang: 'pt-BR',
  setDefaultLang: (lang: string) => {},
});

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [defaultLang, setDefaultLang] = useState(lang);

  useEffect(() => {
    console.log('defaultLang: ', defaultLang);
  }, [defaultLang]);

  return (
    <LanguageContext.Provider
      value={{ defaultLang, setDefaultLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
