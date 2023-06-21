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
  containerStyle?: string;
}

function NavList({
  hoverState,
  dropdownState,
  setHoverState,
  setDropdown,
  headerText,
  containerStyle,
}: NavListProps) {
  return (
    <ul
      className={`${containerStyle} font-title cursor-pointer md:font-subtitle md:text-sm md:flex md:uppercase md:font-semibold md:gap-2`}
      onMouseEnter={() =>
        setHoverState && setHoverState(true)
      }
    >
      {Object.entries(headerText.nav.links).map(
        ([key, value]) => (
          <li
            key={key}
            className="px-2 hover:border-b hover:border-solid hover:border-black flex items-center transition ease-in-out duration-300"
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
  );
}

export default NavList;
