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
      className={`absolute grid h-96 w-full grid-cols-3 bg-gray px-20
       pt-14 font-title text-lg transition duration-500`}
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
