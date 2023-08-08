/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import LangSelector from '../langSelector';
import { useState, useEffect } from 'react';
import Search from '../search';
import Logo from '../logo';
import Cart from '../cart';
import { HeaderProps } from '../../../../messages/useContent';
import Banner from '../banner';
import CloseIcon from '../../icons/close';
import MenuOutlineIcon from '../../icons/menuOutline';
import Portal from '../../portal';
import { DropdownProps } from '../../../../messages/useContent';
import FirstModalList from './firstModal';
import SecondModalList from './secondModal';
import SearchModal from '../search/modal';

function HeaderMobile({ header }: { header: HeaderProps }) {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [dropdownSelected, setDropdownSelected] =
    useState<string>('');
  const [objDropdown, setObjDropdown] =
    useState<DropdownProps | null>(null);
  const dropdown = header.dropdown;
  const [delayedTransform, setDelayedTransform] =
    useState('');
  const [searchModalOpen, setSearchModalOpen] =
    useState(false);

  useEffect(() => {
    Object.entries(dropdown).find(([key, value]) => {
      if (key === dropdownSelected) {
        setObjDropdown(value);
      }
    });
  }, [dropdownSelected]);

  useEffect(() => {
    if (firstHover === true) {
      setDelayedTransform('opacity-100');
      return;
    }
    setDelayedTransform('opacity-0');
  }, [firstHover]);

  return (
    <header className="fixed inset-x-0 z-40 w-screen bg-gray">
      <Banner headerText={header} />
      <div className="flex items-center justify-between px-4">
        <div className="flex gap-2">
          <button onClick={() => setFirstHover(true)}>
            <MenuOutlineIcon />
          </button>
          <Logo logoText={header.logo} />
          <Portal modalState={firstHover}>
            <div
              className={`fixed h-screen w-screen bg-gray 
              transition-opacity duration-300 ${delayedTransform}`}
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
                  setfirstHover={setFirstHover}
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
          <Search
            setModalOpen={setSearchModalOpen}
            modalOpen={searchModalOpen}
            screenSize="mobile"
          />
          <LangSelector />
          <Cart />
        </div>
      </div>
      {searchModalOpen && (
        <SearchModal
          setModalOpen={setSearchModalOpen}
          screenSize="mobile"
        />
      )}
    </header>
  );
}

export default HeaderMobile;
