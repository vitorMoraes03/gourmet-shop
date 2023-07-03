/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import LangSelector from '../langSelector';
import { useState, useEffect } from 'react';
import Search from '../cartAndProfile/search';
import Logo from '../logo';
import Cart from '../cartAndProfile/cart';
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
    <header className="fixed inset-x-0 z-40 w-screen bg-gray">
      <Banner headerText={header} />
      <div className="flex items-center justify-between px-4">
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
              className={`fixed left-0 top-0 h-screen w-screen bg-gray transition-opacity ${
                firstHover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-end justify-end">
                <button
                  onClick={() => setFirstHover(false)}
                  className="p-2"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="relative z-50 border-l-red-200">
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
              <div className="mt-32 text-center">
                <button
                  type="button"
                  className="bg-white px-24 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  Login
                </button>
              </div>
            </div>
          </Portal>
        </div>
        <div className="flex items-center gap-1">
          <Search />
          <LangSelector />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
