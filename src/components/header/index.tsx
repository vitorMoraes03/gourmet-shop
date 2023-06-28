'use client';

import isSmallScreen from '@/utils/isSmallScreen';
import MobileNav from './nav/mobileNav';
import NavList from './nav/navList';
import LangSelector from './langSelector';
import { useState, useContext } from 'react';
import Search from './cart/search';
import Profile from './cart/profile';
import Logo from './logo';
import Cart from './cart/cart';
import { HeaderProps } from '../../../messages/useContent';
import DropdownNav from './nav/dropdown';
import Banner from './banner';
import { DropdownContext } from '@/contexts/dropdown';

function Header({ header }: { header: HeaderProps }) {
  // const [dropdownHovered, setDropdownHovered] =
  //   useState(false);
  const { hover, setHover } = useContext(DropdownContext);
  const [dropdownSelected, setDropdownSelected] = useState<
    string | null
  >(null);

  return (
    <header className="fixed inset-x-0 w-screen bg-gray z-50">
      <Banner headerText={header} />
      <div className="flex justify-between items-center px-4 md:items-center md:grid md:grid-cols-6 md:px-5 md:h-20">
        {isSmallScreen() && (
          <MobileNav headerText={header} />
        )}
        <Logo
          logoText={header.logo}
          containerStyle={
            'md:-ml-24 md:col-span-1 text-center mb-2'
          }
        />
        {!isSmallScreen() && (
          <NavList
            hoverState={hover}
            dropdownState={dropdownSelected}
            setHoverState={setHover}
            setDropdown={setDropdownSelected}
            headerText={header}
            containerStyle={'md:col-span-4 md:h-full'}
          />
        )}
        <div className="md:col-span-1 md:h-20 flex gap-2 md:gap-6 items-center">
          <Search />
          <LangSelector />
          {!isSmallScreen() && <Profile />}
          <Cart />
        </div>
      </div>
      {hover && dropdownSelected && (
        <DropdownNav
          identifier={
            dropdownSelected as keyof typeof header.dropdown
          }
          headerText={header}
          setHover={setHover}
          containerStyle={
            'grid grid-cols-3 w-full pt-14 h-96 px-20'
          }
        />
      )}
    </header>
  );
}

export default Header;
