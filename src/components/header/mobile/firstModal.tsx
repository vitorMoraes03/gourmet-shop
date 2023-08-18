import ArrowRightIcon from '@/components/icons/arrowright';
import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';
import { FilterContext } from '@/contexts/filter';
import { useContext } from 'react';

function FirstModalList({
  header,
  setDropdownSelected,
  setSecondHover,
  setfirstHover,
  setLink,
}: {
  header: HeaderProps;
  setDropdownSelected: (value: string) => void;
  setSecondHover: (value: boolean) => void;
  setfirstHover: (value: boolean) => void;
  setLink: (link: string) => void;
}) {
  const liStyle =
    'px-4 mb-2 flex items-center justify-between';
  const { setClearInputs } = useContext(FilterContext);

  return (
    <div>
      <ul className="mt-4 w-full cursor-pointer font-title text-2xl">
        {Object.entries(header.nav.links).map(
          ([key, value]) => (
            <li
              key={key}
              className={liStyle}
              onClick={() => {
                setSecondHover(true);
                setDropdownSelected(`${key}`);
              }}
            >
              <h3>{value}</h3>
              <ArrowRightIcon />
            </li>
          )
        )}
        <li
          className={liStyle}
          onClick={() => {
            setClearInputs(true);
            setLink('allProducts');
            setfirstHover(false);
          }}
        >
          <Link href="/product">
            <h3>{header.nav.allProducts}</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FirstModalList;
