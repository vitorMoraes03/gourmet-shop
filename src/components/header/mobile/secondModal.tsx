import Link from 'next/link';
import { DropdownProps } from '../../../../messages/useContent';
import ArrowLeftIcon from '@/components/icons/arrowleft';

function SecondModalList({
  objDropdown,
  dropdownSelected,
  secondHover,
  setSecondHover,
}: {
  objDropdown: DropdownProps | null;
  dropdownSelected: string;
  secondHover: boolean;
  setSecondHover: (value: boolean) => void;
}) {
  return (
    <div
      className={`absolute top-0 z-10 bg-gray 
      transition-transform duration-500 ease-in-out 
      ${
        secondHover ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {objDropdown && (
        <div className="font-title mt-4 w-full cursor-pointer px-5">
          <div className="relative inline-block" onClick={() => setSecondHover(false)}>
            <div className="absolute -left-4 bottom-1/2 translate-y-1/2">
              <ArrowLeftIcon />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {objDropdown.title}
            </h2>
          </div>
          <ul className="mt-7">
            {objDropdown.links.map(({ href, label }) => (
              <li
                key={`${dropdownSelected}-${href}`}
                className="mb-2 flex items-center justify-between"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SecondModalList;
