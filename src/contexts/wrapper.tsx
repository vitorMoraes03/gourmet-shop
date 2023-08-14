import { FilterProvider } from './filter';
import { LanguageProvider } from './language';
import { ProductsProvider } from './products';

function ContextWrapper({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <FilterProvider>
      <LanguageProvider lang={lang}>
        <ProductsProvider>{children}</ProductsProvider>
      </LanguageProvider>
    </FilterProvider>
  );
}

export default ContextWrapper;
