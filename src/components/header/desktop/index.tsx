'use client';

import LangSelector from '../langSelector';
import { useState } from 'react';
import Search from '../search';
import Profile from '../profile';
import Logo from '../logo';
import Cart from '../cart';
import { HeaderProps } from '../../../../messages/useContent';
import Banner from '../banner';
import Dropdown from './dropdown';
import NavLinks from './navLinks';
import SearchModal from '../search/modal';

function HeaderDesktop({
  header,
  setLink,
}: {
  header: HeaderProps;
  setLink: any;
}) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState<
    string | null
  >(null);
  const [searchModalOpen, setSearchModalOpen] =
    useState(false);

  return (
    <header className="fixed inset-x-0 z-40 w-screen bg-gray">
      <Banner headerText={header} />
      <div className="grid h-20 grid-cols-6 items-center px-5">
        <Logo logoText={header.logo} />
        <div className="md:col-span-3 md:h-full">
          <ul
            className="mt-4 w-full cursor-pointer pl-8 font-title md:mt-0 
            md:flex md:h-full md:gap-2 md:font-subtitle md:text-xs md:font-semibold 
            md:uppercase lg:text-sm"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
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
        <div className="col-span-2 flex h-20 items-center justify-end gap-6">
          <Search
            setModalOpen={setSearchModalOpen}
            screenSize="desktop"
          />
          <LangSelector />
          <Profile />
          <Cart />
        </div>
      </div>
      {dropdown && dropdownSelected && (
        <Dropdown
          identifier={
            dropdownSelected as keyof typeof header.dropdown
          }
          headerText={header}
          setDropdown={setDropdown}
          setLink={setLink}
        />
      )}
      {searchModalOpen && (
        <SearchModal
          setModalOpen={setSearchModalOpen}
          screenSize="desktop"
        />
      )}
    </header>
  );
}

export default HeaderDesktop;
