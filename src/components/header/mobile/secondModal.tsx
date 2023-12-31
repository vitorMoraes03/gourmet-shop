import Link from 'next/link';
import { DropdownProps } from '../../../../messages/useContent';
import ArrowLeftIcon from '@/components/icons/arrowleft';
import { FilterContext } from '@/contexts/filter';
import { useContext } from 'react';

function SecondModalList({
  objDropdown,
  dropdownSelected,
  secondHover,
  setSecondHover,
  setFirstHover,
  setLink,
}: {
  objDropdown: DropdownProps | null;
  dropdownSelected: string;
  secondHover: boolean;
  setSecondHover: (value: boolean) => void;
  setFirstHover: (value: boolean) => void;
  setLink: (link: string) => void;
}) {
  const { setClearInputs } = useContext(FilterContext);

  return (
    <div
      className={`absolute top-0 z-10 w-full bg-gray 
      transition-transform duration-500 ease-in-out 
      ${
        secondHover ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {objDropdown && (
        <div className="mt-4 w-full cursor-pointer px-5 font-title">
          <div
            className="relative inline-block"
            onClick={() => setSecondHover(false)}
          >
            <div className="absolute -left-4 bottom-1/2 translate-y-1/2">
              <ArrowLeftIcon />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {objDropdown.title
                ? objDropdown.title
                : 'Return'}
            </h2>
          </div>
          <ul className="mt-7">
            {objDropdown.links.map(({ href, label }) => (
              <li
                key={`${dropdownSelected}-${href}`}
                className="mb-2 flex cursor-default items-center justify-between"
              >
                <Link
                  href={'/product'}
                  className="z-10"
                  onClick={() => {
                    setFirstHover(false);
                    setSecondHover(false);
                    setClearInputs(true);
                    setLink(label);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SecondModalList;
