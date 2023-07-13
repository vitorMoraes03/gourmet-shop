import { useEffect, useState } from 'react';
import CloseIcon from '../icons/close';
import Portal from '../portal';
import Filter, { FilterProps } from './filter';
import { SelectorProps } from './mobileSelector';

function ModalFilter({
  content,
  filterContent,
  modalOpen,
  setModalOpen,
}: {
  content: SelectorProps;
  filterContent: FilterProps;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  const [modalTransform, setModalTransform] = useState('');

  useEffect(() => {
    if (modalOpen) {
      setModalTransform('translate-y-0');
      return;
    }
    setModalTransform('translate-y-full');
  }, [modalOpen]);

  return (
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
  );
}

export default ModalFilter;
