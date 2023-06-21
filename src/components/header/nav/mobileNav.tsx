import { SetStateAction, useState } from 'react';
import MenuOutlineIcon from '@/components/icons/menuOutline';
import CloseIcon from '@/components/icons/close';
import Portal from '@/components/portal';
import NavList from './navList';
import { HeaderProps } from '../../../../messages/useContent';

function MobileNav({
  headerText,
}: {
  headerText: HeaderProps;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const overlayNav =
    'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 overflow-auto z-20';

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        <MenuOutlineIcon />
      </button>
      <Portal
        modalState={modalOpen}
        setModalState={setModalOpen}
        overlayStyle={overlayNav}
      >
        <div
          className={`z-100 bg-white w-2/3 h-screen transition-opacity ${
            modalOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex justify-end items-end">
            <button
              onClick={() => setModalOpen(false)}
              className="p-2"
            >
              <CloseIcon />
            </button>
          </div>
          <NavList headerText={headerText} />
        </div>
      </Portal>
    </div>
  );
}

export default MobileNav;
