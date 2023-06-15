import Link from 'next/link';
import {
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react';

const linksNav = [
  { href: '', label: 'Blog' },
  { href: '', label: 'Vinhos' },
  { href: '', label: 'Conservas' },
  { href: '', label: 'Queijos' },
  {
    href: '',
    label: 'Todos os produtos',
  },
];

interface NavListProps {
  hoverState?: boolean;
  setHoverState?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setDropdown?: React.Dispatch<
    React.SetStateAction<string>
  >;
}

function NavList({
  hoverState,
  setHoverState,
  setDropdown,
}: NavListProps) {
  return (
    <ul
      className="font-title p-3 cursor-pointer md:font-subtitle md:text-xs 
    md:flex md:uppercase md:font-semibold md:ml-5"
      onMouseEnter={() =>
        setHoverState && setHoverState(true)
      }
    >
      {linksNav.map(({ href, label }) => (
        <li key={`${href}${label}`} className="mb-2 pl-3">
          <Link
            href={href}
            onMouseEnter={() =>
              setDropdown && setDropdown(`${label}`)
            }
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
