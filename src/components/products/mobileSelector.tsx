import { useEffect, useState } from 'react';
import AddIcon from '../icons/add';
import Portal from '../portal';
import Filter from './filter';
import { FilterProps } from './filter';
import CloseIcon from '../icons/close';
import ListItem from './listItem';

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
  const [modalTransform, setModalTransform] = useState('');
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [sortModalTransform, setSortModalTransform] =
    useState('');

  useEffect(() => {
    if (modalOpen) {
      setModalTransform('translate-y-0');
      return;
    }
    setModalTransform('translate-y-full');
  }, [modalOpen]);

  useEffect(() => {
    if (sortModalOpen) {
      setSortModalTransform('translate-y-0');
      return;
    }
    setSortModalTransform('translate-y-full');
  }, [sortModalOpen]);

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
      <Portal modalState={sortModalOpen}>
        <div
          className={`h-screen bg-white px-3 py-4 text-xs
          transition-transform duration-500 ${sortModalTransform}`}
        >
          <div className="mb-1 flex justify-end">
            <button onClick={() => setSortModalOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="mb-5 tracking-tight">
            <h3 className="font-semibold">{content.desktop}</h3>
            <ul className="pb-4">
              {content.options.map((option, index) => {
                return (
                  <ListItem
                    item={option}
                    key={`${index}-${option.value}}`}
                    index={index}
                  />
                );
              })}
            </ul>
          </div>
          <button
            className="black-button w-full py-1 
          text-[10px] font-semibold tracking-wider"
          >
            {content.mobileBtn}
          </button>
        </div>
      </Portal>
      <Portal modalState={modalOpen}>
        <div
          className={`h-screen bg-white px-3 py-4
          transition-transform duration-500 ${modalTransform}`}
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
