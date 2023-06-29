/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import LangSelector from '../langSelector';
import { useState, useEffect } from 'react';
import Search from '../cart/search';
import Logo from '../logo';
import Cart from '../cart/cart';
import { HeaderProps } from '../../../../messages/useContent';
import Banner from '../banner';
import CloseIcon from '../../icons/close';
import MenuOutlineIcon from '../../icons/menuOutline';
import Portal from '../../portal';
import { DropdownProps } from '../../../../messages/useContent';
import FirstModalList from './firstModal';
import SecondModalList from './secondModal';

function HeaderMobile({ header }: { header: HeaderProps }) {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [dropdownSelected, setDropdownSelected] =
    useState<string>('');
  const [objDropdown, setObjDropdown] =
    useState<DropdownProps | null>(null);
  const dropdown = header.dropdown;

  useEffect(() => {
    Object.entries(dropdown).find(([key, value]) => {
      if (key === dropdownSelected) {
        setObjDropdown(value);
      }
    });
  }, [dropdownSelected]);

  return (
    <header className="fixed inset-x-0 w-screen bg-gray z-40">
      <Banner headerText={header} />
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2">
          <button onClick={() => setFirstHover(true)}>
            <MenuOutlineIcon />
          </button>
          <Logo logoText={header.logo} />
          <Portal
            modalState={firstHover}
            setModalState={setFirstHover}
          >
            <div
              className={`bg-gray fixed top-0 left-0 w-screen h-screen transition-opacity ${
                firstHover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex justify-end items-end">
                <button
                  onClick={() => setFirstHover(false)}
                  className="p-2"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="relative">
                <FirstModalList
                  header={header}
                  setDropdownSelected={setDropdownSelected}
                  setSecondHover={setSecondHover}
                />
                <SecondModalList
                  objDropdown={objDropdown}
                  dropdownSelected={dropdownSelected}
                  secondHover={secondHover}
                  setSecondHover={setSecondHover}
                />
              </div>
              <div className="text-center mt-32">
                <button
                  type="button"
                  className="bg-white uppercase text-xs font-semibold px-24 py-3 tracking-wider"
                >
                  Login
                </button>
              </div>
            </div>
          </Portal>
        </div>
        <div className="flex gap-1 items-center">
          <Search />
          <LangSelector />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
