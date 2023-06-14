'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import { useState } from 'react';
import Portal from '../portal';
import Cart from './cart';
import Logo from './logo';
import MobileNav from './mobileNav';
import Profile from './profile';
import Search from './search';

function Header() {
  return (
    <header
      className="flex justify-between items-center
     fixed inset-x-0 w-screen border py-3 px-5 bg-gray"
    >
      {isSmallScreen() && <MobileNav />}
      <Logo />
      <div className="flex gap-2">
        <Search />
        {!isSmallScreen() && <Profile />}
        <Cart />
      </div>
    </header>
  );
}

export default Header;
