'use client';

import React from 'react';
import { useState } from 'react';

export const LanguageContext = React.createContext({
  defaultLang: 'pt-BR',
  setDefaultLang: (lang: 'pt-BR' | 'en') => {},
});

// Temos um problema aqui, talvez preciso de useEffect, e/ou LocalStorage
// Quando inicia a página locale é 'en' e defaultLang é 'pt-BR'

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
