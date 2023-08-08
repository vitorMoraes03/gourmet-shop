import { FilterProvider } from './filter';
import { LanguageProvider } from './language';
import { ProductsProvider } from './products';

function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FilterProvider>
      <LanguageProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </LanguageProvider>
    </FilterProvider>
  );
}

export default ContextWrapper;
