import SearchIcon from '@/components/icons/search';
import { FilterContext } from '@/contexts/filter';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/language';

function Search() {
  const { filters, setFilters } = useContext(FilterContext);
  const { defaultLang } = useContext(LanguageContext);

  const abreviation = defaultLang === 'pt-BR' ? 'pt' : 'en';
  const key = `description.${abreviation}`;

  return (
    <div
      className="custom-border"
      onClick={() => {
        setFilters({
          ...filters,
          [key]: ['gorgonzola'],
        });
      }}
    >
      <SearchIcon />
    </div>
  );
}

export default Search;
