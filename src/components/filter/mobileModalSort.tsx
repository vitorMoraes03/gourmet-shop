import { useEffect, useState } from 'react';
import CloseIcon from '../icons/close';
import Portal from '../portal';
import ListItem from './listItem';
import { SelectorProps } from './mobileSelector';
import { divModalStyle } from './mobileModalFilter';

function ModalSort({
  content,
  sortModalOpen,
  setSortModalOpen,
}: {
  content: SelectorProps;
  sortModalOpen: boolean;
  setSortModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  const [sortModalTransform, setSortModalTransform] =
    useState('');

  useEffect(() => {
    if (sortModalOpen) {
      setSortModalTransform('translate-y-0');
      document.body.style.overflowY = 'hidden';
      return;
    }
    setSortModalTransform('translate-y-full');
    document.body.style.overflowY = 'hidden';
  }, [sortModalOpen]);

  return (
    <Portal modalState={sortModalOpen}>
      <div
        className={`${divModalStyle} ${sortModalTransform}`}
      >
        <div className="mb-1 flex justify-end">
          <button onClick={() => setSortModalOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="mb-5 tracking-tight">
          <h3 className="font-semibold">
            {content.desktop}
          </h3>
          <ul className="pb-4">
            {content.options.map((option, index) => {
              return (
                <ListItem
                  item={option}
                  key={`${index}-${option.value}}`}
                  category='sort'
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
  );
}

export default ModalSort;
