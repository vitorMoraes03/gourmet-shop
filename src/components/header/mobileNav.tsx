import { useState } from 'react';
import MenuOutlineIcon from '../icons/menuOutline';
import CloseIcon from '../icons/close';
import Portal from '../portal';
import NavList from './navList';

function MobileNav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        <MenuOutlineIcon />
      </button>
      <Portal
        modalState={modalOpen}
        setModalState={setModalOpen}
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
          <NavList />
        </div>
      </Portal>
    </div>
  );
}

export default MobileNav;
