'use client';

import Logo from './logo';
import NavBar from './navbar';
import Cart from './cart';
import Search from './search';
import MenuOutlineIcon from '../icons/menuOutline';
import Profile from './profile';
import isSmallScreen from '@/utils/isSmallScreen';
import Portal from '../modal';
import { useState } from 'react';

function Header() {
  const [navModal, setNavModal] = useState(false);

  function handleModal() {
    console.log('handleModal clicked');
  }

  return (
    <header
      className="flex justify-between items-center
     fixed inset-x-0 w-screen border py-3 px-5 bg-gray"
    >
      <Portal
        setModalState={setNavModal}
        modalState={navModal}
      >
        <p>Next Js Portal by LearnBestCoding</p>
      </Portal>
      {isSmallScreen() && (
        <button>
          <MenuOutlineIcon />
        </button>
      )}
      <Logo />
      {/* {!isSmallScreen() && <NavBar />} */}
      <div className="flex gap-2">
        <Search />
        {!isSmallScreen() && <Profile />}
        <Cart />
      </div>
    </header>
  );
}

export default Header;
