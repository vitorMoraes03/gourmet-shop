import Link from 'next/link';
import DropdownNav from './dropdown';
import { HeaderProps } from '../../../../messages/useContent';

// a grande questao do dropdown
// 

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
        className="font-title cursor-pointer md:h-20 md:font-subtitle md:text-sm 
    md:flex md:uppercase md:font-semibold md:gap-2"
        onMouseEnter={() =>
          setHoverState && setHoverState(true)
        }
      >
        {Object.entries(headerText.nav.links).map(
          ([key, value]) => (
            <li
              key={key}
              className="px-2 hover:border-b hover:border-solid hover:border-black flex items-center"
            >
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
      {/* {hoverState && dropdownState && (
        <DropdownNav
          identifier={
            dropdownState as keyof typeof headerText.dropdown
          }
          headerText={headerText}
        />
      )} */}
    </div>
  );
}

export default NavList;
