import SearchIcon from '@/components/icons/search';
import { Dispatch, SetStateAction } from 'react';

function Search({
  screenSize,
  setModalOpen,
  modalOpen,
}: {
  screenSize: 'mobile' | 'desktop';
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalOpen?: boolean;
}) {
  return (
    <div
      className="sm:pl-14 sm:pr-5"
      onMouseEnter={() =>
        screenSize === 'desktop' && setModalOpen(true)
      }
      onMouseLeave={() =>
        screenSize === 'desktop' && setModalOpen(false)
      }
    >
      <div
        className="custom-border"
        onClick={() =>
          screenSize === 'mobile' &&
          setModalOpen(!modalOpen)
        }
      >
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;
