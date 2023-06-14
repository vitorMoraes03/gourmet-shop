import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import Blog from './blog';

const linksNav = [
  { href: '/blog', label: 'Blog' },
  { href: '/vinhos', label: 'Vinhos' },
  { href: '/conservas', label: 'Conservas' },
  { href: '/queijos', label: 'Queijos' },
  {
    href: '/todos-os-produtos',
    label: 'Todos os produtos',
  },
];

function NavList() {
  const [isHovered, setIsHovered] = useState(false);

  // corrigir o ANY
  function handleHover(e: any) {
    setIsHovered(e.target.value);
  }

  return (
    <ul
      className="font-title p-3 md:font-subtitle md:text-xs 
    md:flex md:uppercase md:font-semibold md:ml-5"
    >
      {linksNav.map(({ href, label }) => (
        <li
          key={`${href}${label}`}
          className="mb-2 pl-3"
          onMouseEnter={handleHover}
          value={label}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
