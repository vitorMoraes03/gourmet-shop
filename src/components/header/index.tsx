'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import MobileNav from './nav/mobileNav';
import NavList from './nav/navList';
import LangSelector from './langSelector';
import { useState } from 'react';
import Search from './cart/search';
import Profile from './cart/profile';
import Logo from './logo/logo';
import Cart from './cart/cart';
import { HeaderProps } from '../../../messages/useContent';
import DropdownNav from './nav/dropdown';

function Header({ header }: { header: HeaderProps }) {
  const [dropdownHovered, setDropdownHovered] =
    useState(false);
  const [dropdownSelected, setDropdownSelected] = useState<
    string | null
  >(null);

  return (
    <header className="fixed inset-x-0 w-screen h-20 bg-gray">
      <div
        className="flex justify-between items-center
     px-5"
      >
        {isSmallScreen() && (
          <MobileNav headerText={header} />
        )}
        <div className="md:flex md:items-center md:gap-10">
          <Logo logoText={header.logo} />
          {!isSmallScreen() && (
            <NavList
              hoverState={dropdownHovered}
              dropdownState={dropdownSelected}
              setHoverState={setDropdownHovered}
              setDropdown={setDropdownSelected}
              headerText={header}
            />
          )}
        </div>
        <div className="flex gap-2 md:gap-6 items-center">
          <Search />
          <LangSelector />
          {!isSmallScreen() && <Profile />}
          <Cart />
        </div>
      </div>
      {dropdownHovered && dropdownSelected && (
        <DropdownNav
          identifier={
            dropdownSelected as keyof typeof header.dropdown
          }
          headerText={header}
          setHover={setDropdownHovered}
        />
      )}
    </header>
  );
}

export default Header;
