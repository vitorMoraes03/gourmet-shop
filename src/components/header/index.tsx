'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import { useState } from 'react';
import Portal from '../portal';
import Cart from './cart';
import Logo from './logo';
import MobileNav from './mobileNav';
import Profile from './profile';
import Search from './search';
import NavList from './navList';

function Header() {
  return (
    <header
      className="flex justify-between items-center
     fixed inset-x-0 w-screen border py-3 px-5 bg-gray"
    >
      {isSmallScreen() && <MobileNav />}
      <div className="md:flex">
        <Logo />
        {!isSmallScreen() && <NavList />}
      </div>
      <div className="flex gap-2 md:gap-6">
        <Search />
        {!isSmallScreen() && <Profile />}
        <Cart />
      </div>
    </header>
  );
}

export default Header;
