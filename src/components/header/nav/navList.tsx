import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';

interface NavListProps {
  hoverState?: boolean;
  dropdownState?: string | null;
  setHoverState?: (value: boolean) => void;
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
    <div className={containerStyle}>
      <ul
        className="font-title w-fit cursor-pointer md:h-full md:font-subtitle md:text-sm md:flex md:uppercase md:font-semibold md:gap-2"
        onMouseEnter={() =>
          setHoverState && setHoverState(true)
        }
        onMouseLeave={() =>
          setHoverState && setHoverState(false)
        }
      >
        {Object.entries(headerText.nav.links).map(
          ([key, value]) => (
            <li
              key={key}
              className="px-4 md:px-2 md:custom-border mb-2 md:mb-0"
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
    </div>
  );
}

export default NavList;
