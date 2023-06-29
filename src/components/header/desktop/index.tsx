'use client';

import LangSelector from '../langSelector';
import { useState } from 'react';
import Search from '../cart/search';
import Profile from '../cart/profile';
import Logo from '../logo';
import Cart from '../cart/cart';
import { HeaderProps } from '../../../../messages/useContent';
import Banner from '../banner';
import Dropdown from './dropdown';
import NavLinks from './navLinks';

function HeaderDesktop({
  header,
}: {
  header: HeaderProps;
}) {
  const [hover, setHover] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState<
    string | null
  >(null);

  return (
    <header className="fixed inset-x-0 w-screen bg-gray z-40">
      <Banner headerText={header} />
      <div className="grid grid-cols-6 items-center px-5 h-20">
        <Logo logoText={header.logo} />
        <div className="md:col-span-4 md:h-full">
          <ul
            className="font-title mt-4 md:mt-0 w-full cursor-pointer md:h-full md:font-subtitle md:text-sm md:flex md:uppercase md:font-semibold md:gap-2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {Object.entries(header.nav.links).map(
              ([key, value]) => (
                <NavLinks
                  key={key}
                  id={key}
                  value={value}
                  setDropdownSelected={setDropdownSelected}
                />
              )
            )}
          </ul>
        </div>
        <div className="col-span-1 h-20 flex gap-6 items-center">
          <Search />
          <LangSelector />
          <Profile />
          <Cart />
        </div>
      </div>
      {hover && dropdownSelected && (
        <Dropdown
          identifier={
            dropdownSelected as keyof typeof header.dropdown
          }
          headerText={header}
          setHover={setHover}
        />
      )}
    </header>
  );
}

export default HeaderDesktop;
