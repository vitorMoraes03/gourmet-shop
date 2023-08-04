import { HeaderProps } from '../../../../messages/useContent';
import DropdownList from './listDropdown';
import ImageDropdown from './imageDropdown';

function Dropdown({
  identifier,
  headerText,
  setHover,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setHover: (value: boolean) => void;
}) {
  return (
    <div
      className={`grid grid-cols-3 w-full pt-14 h-96 px-20 absolute
       bg-gray font-title text-lg transition duration-500`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <DropdownList
        identifier={identifier}
        headerText={headerText}
      />
      <ImageDropdown
        identifier={identifier}
        headerText={headerText}
      />
    </div>
  );
}

export default Dropdown;
