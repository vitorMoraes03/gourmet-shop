import { useEffect, useState } from 'react';
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
    'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-50';

  // useEffect(() => {
  //   if (modalOpen) document.body.style.overflow = 'hidden';
  // }, [modalOpen]);

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
          className={`bg-gray fixed top-0 left-0 w-screen h-screen transition-opacity ${
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
          <div className="text-center mt-8">
            <button
              type="button"
              className="bg-white uppercase text-xs font-semibold px-24 py-3 tracking-wider"
            >
              Login
            </button>
          </div>
        </div>
      </Portal>
    </div>
  );
}

// className="bg-black text-white uppercase md:text-sm text-xs
// font-bold w-3/5 justify-self-center md:self-start
// md:w-3/6 py-2 mt-2"

export default MobileNav;
