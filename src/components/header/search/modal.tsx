import ArrowRightIcon from '@/components/icons/arrowright';
import { FilterContext } from '@/contexts/filter';
import { LanguageContext } from '@/contexts/language';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

function SearchModal({
  setModalOpen,
  screenSize,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  screenSize: 'mobile' | 'desktop';
}) {
  const [inputSearch, setInputSearch] = useState('');
  const { filters, setFilters } = useContext(FilterContext);
  const { defaultLang } = useContext(LanguageContext);

  const abreviation = defaultLang === 'pt-BR' ? 'pt' : 'en';
  const key = `search.${abreviation}`;

  function handleInput(e: any) {
    const value = e.target.value;
    setInputSearch(value);
  }

  return (
    <div
      className="absolute w-full bg-gray px-8 pb-6 pt-2 
    transition duration-500 md:right-10 md:w-1/3"
      onMouseEnter={() =>
        screenSize === 'desktop' && setModalOpen(true)
      }
      onMouseLeave={() =>
        screenSize === 'desktop' && setModalOpen(false)
      }
    >
      <div className="flex items-center border-b">
        <input
          className="w-full bg-gray"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => handleInput(e)}
        />
        <button
          onClick={() =>
            setFilters({
              ...filters,
              [key]: [inputSearch],
            })
          }
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchModal;
