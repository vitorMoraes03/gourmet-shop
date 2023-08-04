import SearchIcon from '@/components/icons/search';
import { FilterContext } from '@/contexts/filter';
import {
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { LanguageContext } from '@/contexts/language';

function Search({
  screenSize,
  setModalOpen,
  modalOpen,
}: {
  screenSize: 'mobile' | 'desktop';
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalOpen?: boolean;
}) {
  const { filters, setFilters } = useContext(FilterContext);
  const { defaultLang } = useContext(LanguageContext);

  const abreviation = defaultLang === 'pt-BR' ? 'pt' : 'en';
  const key = `search.${abreviation}`;

  function handleMouseEnter() {
    if (screenSize === 'mobile') return;
    setModalOpen(true);
  }

  function handleMouseLeave() {
    if (screenSize === 'mobile') return;
    setModalOpen(false);
  }

  function handleClick() {
    if (screenSize === 'desktop') return;
    setModalOpen(!modalOpen);
  }

  return (
    <div
      className="custom-border"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleClick()}
      // onClick={() => {
      //   setFilters({
      //     ...filters,
      //     // test only
      //     [key]: ['gorgonzola'],
      //   });
      // }}
    >
      <SearchIcon />
    </div>
  );
}

export default Search;
