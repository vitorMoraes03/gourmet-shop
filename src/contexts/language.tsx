'use client';

import React from 'react';
import { useState } from 'react';

export const LanguageContext = React.createContext({
  defaultLang: 'pt-BR',
  setDefaultLang: (lang: 'pt-BR' | 'en') => {},
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [defaultLang, setDefaultLang] = useState<
    'pt-BR' | 'en'
  >('pt-BR');

  return (
    <LanguageContext.Provider
      value={{ defaultLang, setDefaultLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
