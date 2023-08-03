import SearchIcon from '@/components/icons/search';
import { FilterContext } from '@/contexts/filter';
import { useContext } from 'react';

// parece que posso fazer todo o role search aqui, o que vou precisar?
// setFilter!

function Search() {
  const { filters, setFilters } = useContext(FilterContext);

  return (
    <div
      className="custom-border"
      onClick={() => {
        // eu tenho que dar um setFilter tipos assim: 'description.pt': ['lorem ipsum']
        // setFilters({
        //   ...filters,
        //   'description.pt': {
        //     $regex: 'gorgonzola',
        //     $options: 'i',
        //   },
        // });
      }}
    >
      <SearchIcon />
    </div>
  );
}

export default Search;
