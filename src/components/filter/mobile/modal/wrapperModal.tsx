/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CloseIcon from '@/components/icons/close';
import Portal from '@/components/portal';
import { SelectorProps } from '..';

function ModalWrapper({
  content,
  modalOpen,
  setModalOpen,
  children,
  applyFilter,
}: {
  content: SelectorProps;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  children: React.ReactNode;
  applyFilter: () => void;
}) {
  const [modalTransform, setModalTransform] = useState('');

  useEffect(() => {
    if (modalOpen) {
      setModalTransform('translate-y-0');
      document.body.style.overflowY = 'hidden';
      return;
    }
    setModalTransform('translate-y-full');
    document.body.style.overflowY = 'unset';
  }, [modalOpen]);

  return (
    <Portal modalState={modalOpen}>
      <div
        className={`h-screen overflow-y-auto bg-white px-3 py-4 
        transition-transform duration-500 ${modalTransform}`}
      >
        <div className="mb-1 flex justify-end">
          <button onClick={() => setModalOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        {children}
        <button
          className="black-button mt-2 w-full 
    py-2 text-sm font-semibold tracking-wider"
          onClick={() => {
            applyFilter();
            setModalOpen(false);
          }}
        >
          {content.mobileBtn}
        </button>
      </div>
    </Portal>
  );
}

export default ModalWrapper;
