import { HeaderProps } from '../../../../messages/useContent';
import DropdownList from './listDropdown';
import ImageDropdown from './imageDropdown';

function Dropdown({
  identifier,
  headerText,
  setDropdown,
  setLink,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setDropdown: (value: boolean) => void;
  setLink: (value: string) => void;
}) {
  return (
    <div
      className={`grid grid-cols-3 w-full pt-14 h-96 px-20 absolute
       bg-gray font-title text-lg transition duration-500`}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <DropdownList
        identifier={identifier}
        headerText={headerText}
        setLink={setLink}
        setDropdown={setDropdown}
      />
      <ImageDropdown
        identifier={identifier}
        headerText={headerText}
      />
    </div>
  );
}

export default Dropdown;
