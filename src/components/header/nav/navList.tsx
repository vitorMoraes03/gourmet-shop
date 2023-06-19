import Link from 'next/link';
import DropdownNav from './dropdown';
import { HeaderProps } from '../../../../messages/useContent';

// header: {
//   title: t('header.title'),
//   links: {
//     blog: t('header.blog'),
//     wines: t('header.wines'),
//     conserves: t('header.conserves'),
//     cheeses: t('header.cheeses'),
//     all: t('header.all'),
//   },
// },

// loopar no objeto acima e gerar href, label, identifier

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
  headerText: HeaderProps;
}

function NavList({
  hoverState,
  dropdownState,
  setHoverState,
  setDropdown,
  headerText,
}: NavListProps) {
  return (
    <div
      onMouseLeave={() =>
        setHoverState && setHoverState(false)
      }
      className="relative"
    >
      <ul
        className="font-title p-3 cursor-pointer md:font-subtitle md:text-xs 
    md:flex md:uppercase md:font-semibold md:ml-5"
        onMouseEnter={() =>
          setHoverState && setHoverState(true)
        }
      >
        {Object.entries(headerText.links).map(
          ([key, value]) => (
            <li key={key} className="mb-2 pl-3">
              <Link
                href={key}
                onMouseEnter={() =>
                  setDropdown && setDropdown(`${key}`)
                }
              >
                {value}
              </Link>
            </li>
          )
        )}
        {/* {Object.keys(headerText.links).map((key) => {
          if (headerText.links.hasOwnProperty(key)) {
            return (
              <li key={key} className="mb-2 pl-3">
                <Link
                  href={key}
                  onMouseEnter={() =>
                    setDropdown && setDropdown(`${key}`)
                  }
                >
                  {headerText.links[key]}
                </Link>
              </li>
            );
          }
          return null;
        })} */}
        {/* {linksNav.map(({ href, label, identifier }) => (
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
        ))} */}
      </ul>
      {hoverState && dropdownState && (
        <DropdownNav identifier={dropdownState} />
      )}
    </div>
  );
}

export default NavList;
