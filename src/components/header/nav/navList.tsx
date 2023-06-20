import Link from 'next/link';
import DropdownNav from './dropdown';
import { HeaderProps } from '../../../../messages/useContent';

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
        // setHoverState && setHoverState(false)
        setHoverState && setHoverState(true)
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
        {Object.entries(headerText.nav.links).map(
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
      </ul>
      {hoverState && dropdownState && (
        <DropdownNav identifier={dropdownState} headerText={headerText} />
      )}
    </div>
  );
}

export default NavList;
