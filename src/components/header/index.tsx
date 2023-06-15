'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import MobileNav from './nav/mobileNav';
import NavList from './nav/navList';
import DropdownNav from './nav/dropdownNav';
import { useEffect, useState } from 'react';
import Search from './cart/search';
import Profile from './cart/profile';
import Logo from './logo/logo';
import Cart from './cart/cart';
import { allSections } from './nav/allSections';
import Section from './nav/section';
import { SectionProps } from './nav/section';

function Header() {
  const [dropdownHovered, setDropdownHovered] =
    useState(false);
  const [dropdownSelected, setDropdownSelected] = useState<
    string | null
  >(null);

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
      {dropdownHovered && (
        <DropdownNav>
          <Section identifier={dropdownSelected} />
        </DropdownNav>
      )}
    </header>
  );
}

export default Header;
