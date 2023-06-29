import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '../../../../messages/useContent';
import DropdownList from './dropdownList';

function DropdownNav({
  identifier,
  headerText,
  setHover,
  containerStyle,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setHover: (value: boolean) => void;
  containerStyle: string;
}) {
  if (!identifier) {
    return null;
  }

  const sectionNav = headerText.dropdown[identifier];

  return (
    <div
      className={`${containerStyle} absolute bg-gray font-title text-lg transition duration-300`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} // false é default, true para testes
    >
      <DropdownList
        identifier={identifier}
        headerText={headerText}
      />
      {sectionNav.image && (
        <div
          className="col-span-2 grid gap-4 h-fit justify-end"
          style={{ gridTemplateColumns: '380px 250px' }}
        >
          <div>
            <Image
              src={sectionNav.image.src}
              alt={sectionNav.image.alt}
              width={Number(sectionNav.image.width)}
              height={Number(sectionNav.image.height)}
              className="w-96 h-60"
            />
          </div>
          <div className="flex flex-col text-center justify-center gap-1">
            <p className="text-sm font-subtitle text-green font-bold uppercase tracking-wider">
              {sectionNav.image.subtitle}
            </p>
            <h3 className="font-semibold text-2xl tracking-tight">
              {sectionNav.image.title}
            </h3>
            <p className="text-base font-subtitle mt-1">
              {sectionNav.image.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownNav;
