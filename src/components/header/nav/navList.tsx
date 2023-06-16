import Link from 'next/link';
import DropdownNav from './dropdown';

const linksNav = [
  { href: '', label: 'Blog', identifier: 'blog' },
  { href: '', label: 'Vinhos', identifier: 'wines' },
  { href: '', label: 'Conservas', identifier: 'preserves' },
  { href: '', label: 'Queijos', identifier: 'cheeses' },
  {
    href: '',
    label: 'Todos os produtos',
    identifier: 'all',
  },
];

interface NavListProps {
  hoverState?: boolean;
  dropdownState?: string | null;
  setHoverState?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setDropdown?: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

function NavList({
  hoverState,
  dropdownState,
  setHoverState,
  setDropdown,
}: NavListProps) {
  return (
    <div
    onMouseLeave={() =>
        setHoverState && setHoverState(true)
      }
      className='relative'
    >
      <ul
        className="font-title p-3 cursor-pointer md:font-subtitle md:text-xs 
    md:flex md:uppercase md:font-semibold md:ml-5"
        onMouseEnter={() =>
          setHoverState && setHoverState(true)
        }
      >
        {linksNav.map(({ href, label, identifier }) => (
          <li key={`${href}${label}`} className="mb-2 pl-3">
            <Link
              href={href}
              onMouseEnter={() =>
                setDropdown && setDropdown(`${identifier}`)
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {hoverState && dropdownState && (
        <DropdownNav identifier={dropdownState} />
      )}
    </div>
  );
}

export default NavList;
