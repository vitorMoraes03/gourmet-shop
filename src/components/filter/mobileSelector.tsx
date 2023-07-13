import { useState } from 'react';
import AddIcon from '../icons/add';
import { FilterProps } from './filter';
import ModalSort from './mobileModalSort';
import ModalFilter from './mobileModalFilter';

export interface SelectorProps {
  first: string;
  second: string;
  desktop: string;
  mobileBtn: string;
  options: {
    label: string;
    value: string;
  }[];
}

function MobileSelector({
  content,
  filterContent,
}: {
  content: SelectorProps;
  filterContent: FilterProps;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sortModalOpen, setSortModalOpen] = useState(false);

  return (
    <div
      className="flex justify-center border-y 
    border-y-gray text-[8px] font-bold"
    >
      <div className="my-[2px] w-full border-r border-r-gray p-1">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setModalOpen(true)}
        >
          <button className="uppercase tracking-wider">
            {content.first}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
      <div className="my-[2px] w-full p-1">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setSortModalOpen(true)}
        >
          <button className="uppercase tracking-wider">
            {content.second}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
      <ModalSort
        content={content}
        sortModalOpen={sortModalOpen}
        setSortModalOpen={setSortModalOpen}
      />
      <ModalFilter
        content={content}
        filterContent={filterContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default MobileSelector;
