'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import MobileNav from './nav/mobileNav';
import NavList from './nav/navList';
import DropdownNav from './nav/dropdownNav';
import { useEffect, useState } from 'react';
import Search from './search';
import Profile from './profile';
import Logo from './logo';
import Cart from './cart';

function Header() {
  const [dropdownHovered, setDropdownHovered] =
    useState(false);
  const [dropdownSelected, setDropdownSelected] =
    useState('');

  return (
    <header
      className="fixed inset-x-0 w-screen border"
      onMouseLeave={() => setDropdownHovered(false)}
    >
      <div
        className="flex justify-between items-center
     py-3 px-5 bg-gray"
      >
        {isSmallScreen() && <MobileNav />}
        <div className="md:flex">
          <Logo />
          {!isSmallScreen() && (
            <NavList
              hoverState={dropdownHovered}
              setHoverState={setDropdownHovered}
              setDropdown={setDropdownSelected}
            />
          )}
        </div>
        <div className="flex gap-2 md:gap-6">
          <Search />
          {!isSmallScreen() && <Profile />}
          <Cart />
        </div>
      </div>
      {dropdownHovered && <DropdownNav>teste</DropdownNav>}
    </header>
  );
}

export default Header;
