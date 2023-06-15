'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import Cart from './cart';
import Logo from './logo';
import MobileNav from './mobileNav';
import Profile from './profile';
import Search from './search';
import NavList from './navList';
import DropdownNav from './dropdownNav';
import { useState } from 'react';

function Header() {
  const [dropdownHovered, setDropdownHovered] =
    useState(false);

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
