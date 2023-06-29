import ArrowRightIcon from '@/components/icons/arrowright';
import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';

function FirstModalList({
  header,
  setDropdownSelected,
  setSecondHover,
}: {
  header: HeaderProps;
  setDropdownSelected: (value: string) => void;
  setSecondHover: (value: boolean) => void;
}) {
  return (
    <div>
      <ul className="font-title text-2xl mt-4 w-full cursor-pointer">
        {Object.entries(header.nav.links).map(
          ([key, value]) => (
            <li
              key={key}
              className="px-4 mb-2 flex items-center justify-between"
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
      </ul>
    </div>
  );
}

export default FirstModalList;
