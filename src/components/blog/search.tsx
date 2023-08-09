import SearchIcon from '../icons/search';

function SearchBar() {
  return (
    <div className="flex items-center mb-4">
      <input
        placeholder="Tem q ser dinâmico"
        className="outline-none"
      ></input>
      <button className="text-xs">
        <SearchIcon styles="w-4 h-4 mt-1" />
      </button>
    </div>
  );
}

export default SearchBar;
