import { useEffect, useState } from 'react';
import AddIcon from '../icons/add';
import Portal from '../portal';
import Filter from './filter';
import { FilterProps } from './filter';
import CloseIcon from '../icons/close';

export interface SelectorProps {
  first: string;
  second: string;
  desktop: string;
  mobileBtn: string;
  desktopOptions: {
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
  const [delayedTransform, setDelayedTransform] =
    useState('');

  useEffect(() => {
    if (modalOpen) {
      setDelayedTransform('translate-y-0');
      return;
    }
    setDelayedTransform('translate-y-full');
  }, [modalOpen]);

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
        <div className="flex items-center justify-between">
          <button className="uppercase tracking-wider">
            {content.second}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
      <Portal modalState={modalOpen}>
        <div
          className={`h-screen bg-white px-3 py-4
          transition-transform duration-500 ${delayedTransform}`}
        >
          <div className="mb-1 flex justify-end">
            <button onClick={() => setModalOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <Filter content={filterContent} />
          <button
            className="black-button w-full py-1 
          text-[10px] font-semibold tracking-wider"
          >
            {content.mobileBtn}
          </button>
        </div>
      </Portal>
    </div>
  );
}

export default MobileSelector;
